resource "azurerm_storage_account" "static_website" {
  name                     = format("%s%s", local.short-name, "swasa")
  resource_group_name      = azurerm_resource_group.deployment-rg[0].name
  location                 = azurerm_resource_group.deployment-rg[0].location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document    = "index.html"
    error_404_document = "404.html"
  }
}

resource "azurerm_cdn_profile" "cdn_profile" {
  name                = format("%s%s", local.short-name, "cdnprofile")
  location            = "westus"
  resource_group_name = azurerm_resource_group.deployment-rg[0].name
  sku                 = "Standard_Microsoft"
}

resource "azurerm_cdn_endpoint" "cdn_endpoint" {
  name                = format("%s%s", local.short-name, "cdnendpoint")
  profile_name        = azurerm_cdn_profile.cdn_profile.name
  location            = "westus"
  resource_group_name = azurerm_resource_group.deployment-rg[0].name
  origin_host_header  = azurerm_storage_account.static_website.primary_web_host
  origin {
    name      = "storageorigin"
    host_name = azurerm_storage_account.static_website.primary_web_host
  }
}

resource "azurerm_cdn_endpoint_custom_domain" "custom_domain" {
  name                     = "www-lesm-me"
  cdn_endpoint_id = azurerm_cdn_endpoint.cdn_endpoint.id
  host_name                = "www.lesm.me"
  
  cdn_managed_https {
    certificate_type = "Dedicated"
    tls_version = "TLS12"
    protocol_type = "ServerNameIndication"
  }
}