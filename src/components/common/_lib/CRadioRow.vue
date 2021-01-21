<template>
  <div>
    <div class="row mb-default" >
      <div class="col-sm-3">{{ title }}</div>
      <div class="col-sm-1" v-for="field in fields" :key="field.value">
        <div class="d-flex"><span>{{ field.label }}</span><b-radio v-model="model[field.property]" :value="field.value" :disabled="disabled" :plaintext="disabled"></b-radio></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-radio-row',
  props: {
    title: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    model: {
      type: Object,
      required: true
    },
    disabled: Boolean
  }
}
</script>

<style scoped>

</style>
