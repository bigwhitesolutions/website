terraform {
  backend "azurerm" {
    resource_group_name  = "shaunpearsonstate"
    storage_account_name = "shaunpearsonstate"
    container_name       = "shaunpearsonstate"
    key                  = "shaunpearsondev.tfstate"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "website"
  location = "uksouth"
}

resource "azurerm_storage_account" "static_storage" {
  name                      = "shaunpearsondev"
  resource_group_name       = azurerm_resource_group.rg.name
  location                  = azurerm_resource_group.rg.location
  account_kind              = "StorageV2"
  account_tier              = "Standard"
  account_replication_type  = "LRS"
  enable_https_traffic_only = true
  min_tls_version           = "TLS1_2"

  static_website {
    index_document = "index.html"
  }
}

data "cloudflare_zones" "all" {
  filter {

  }
}
resource "cloudflare_record" "root" {
  zone_id = data.cloudflare_zones.all.zones[0].id
  name    = "@"
  value   = azurerm_storage_account.static_storage.primary_web_host
  type    = "CNAME"
  proxied = true
}

output "static_storage_name" {
  value = azurerm_storage_account.static_storage.name
}
