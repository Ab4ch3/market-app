<template>
  <UDashboardGroup
    storage="local"
    storage-key="dashboard-sidebar"
    :persistent="true"
  >
    <!-- Dashboard SideBar -->
    <DashboardSidebar />

    <!-- Dashboard Panel -->
    <UDashboardPanel>
      <!-- Dashboard Navbar -->
      <DashboardNavbar />

      <div class="flex-1 overflow-auto p-6">
        <slot />
      </div>
    </UDashboardPanel>
  </UDashboardGroup>
</template>

<script lang="ts" setup>
import { dashboardNavbar, dashboardSidebar } from "#build/ui";
</script>

<style></style>
