resource "azurerm_storage_account" "static_website" {
  name                     = format("%s%s", local.short-name, "swasa")
  resource_group_name      = azurerm_resource_group.deployment-rg[0].name
  location                 = azurerm_resource_group.deployment-rg[0].location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  static_website {
    index_document = "index.html"
    error_404_document = "404.html"
  }
}
