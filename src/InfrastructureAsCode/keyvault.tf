resource "azurerm_key_vault" "key-vault" {
  name                        = format("%s-%s", local.base-name, "kv")
  resource_group_name         = azurerm_resource_group.deployment-rg[0].name
  location                    = azurerm_resource_group.deployment-rg[0].location
  tenant_id                   = var.tenantId

  enable_rbac_authorization = true
  enabled_for_deployment = true

  enabled_for_disk_encryption = true
  soft_delete_retention_days  = 7
  purge_protection_enabled    = false

  sku_name = "standard"
}


resource "azurerm_log_analytics_workspace" "kv-law" {
  name                = format("%s-%s-law", local.base-name, "kv")
  resource_group_name = azurerm_resource_group.deployment-rg[0].name
  location            = azurerm_resource_group.deployment-rg[0].location
  sku                 = "PerGB2018"
  retention_in_days   = 30
}

resource "azurerm_monitor_diagnostic_setting" "kv-ds" {
  name               = format("%s-%s-ds", local.base-name, "kv")
  target_resource_id = azurerm_key_vault.key-vault.id
  log_analytics_workspace_id = azurerm_log_analytics_workspace.kv-law.id

  log_analytics_destination_type = "Dedicated"

  enabled_log {
    category = "AuditEvent"
    category_group = "allLogs"
  }

  metric {
    category = "AllMetrics"

    retention_policy {
      enabled = false
    }
  }
}