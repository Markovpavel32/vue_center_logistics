<template>
  <div class="bold mb-default d-flex justify-content-between mt-default">
    <span class="page_header__title">{{ title }}</span>
    <slot name="actions"></slot>
</div>
</template>

<script>
export default {
  name: 'page-header',
  props: {
    title: String
  }
}
</script>
