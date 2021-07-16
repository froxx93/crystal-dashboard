<template>
  <div class="app-content content">
    <div class="content-wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/component-definition-name-casing
  name: 'borderless',
}
</script>

<style lang="scss" scoped>
.app-content {
  margin-left: 0;
}
html .content.app-content {
  padding-top: 2rem;
}
</style>
