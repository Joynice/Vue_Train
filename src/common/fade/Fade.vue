<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'CommonFade'
}
</script>

<style lang="stylus" scoped>
  .v-entrt .v-leave-active
    opacity 0
  .v-enter-active .v-leave-active
    transform opacity .5s
</style>
