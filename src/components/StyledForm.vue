<template>
  <div>
    <h2>Dynamic Form</h2>
    <FormKit type="form" :actions="false" @submit="handleFormSubmit">
      <template v-for="(field, index) in formSchema" :key="index">
        <FormKit v-bind="field" />
      </template>
    </FormKit>
  </div>
</template>

<script>
export default {
  props: {
    customization: {
      type: Object,
      required: true
    },
    formSchema: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
  .formkit-outer >>> .formkit-label {
    color: v-bind('customization.color');
    font-family: v-bind('customization.font');
  }
</style>