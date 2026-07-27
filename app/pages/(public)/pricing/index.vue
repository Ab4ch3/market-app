<template>
  <UPageCTA
    orientation="horizontal"
    title="Information about price"
    description="Discover our prices and plans."
  >
    <template #default>
      <div class="flex items-center justify-center">
        <UIcon name="i-simple-icons-nuxtdotjs" :size="150" />
      </div>
    </template>
  </UPageCTA>

  <div class="mt-10" />

  <PricingTable />
</template>

<script lang="ts" setup></script>

<style></style>
