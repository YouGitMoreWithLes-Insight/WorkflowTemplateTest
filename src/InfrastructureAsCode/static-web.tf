resource "azurerm_static_web_app" "website" {
  name                = format("%s-%s", local.base-name, "swa")
  resource_group_name = azurerm_resource_group.deployment-rg[0].name
  location            = azurerm_resource_group.deployment-rg[0].location

  sku_tier = "Free"
  
}
