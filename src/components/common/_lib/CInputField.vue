<template>
  <div class="row">
    <div class="d-flex align-items-center col-sm-6">
      <span class="mr-default col-sm-4" :class="{'text-right': text_right }">{{ label }}</span>
      <b-input class="col-sm-8" :value="model[property]" :placeholder="placeholder"></b-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-input-field',
  props: {
    model: {
      type: Object
    },
    property: {
      type: String
    },
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    text_right: Boolean
  }
}
</script>
