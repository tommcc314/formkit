<template>
    <div class="container">
      <!-- Customizer Form Component -->
      <CustomizerForm :customization="customization" :formSchema="formSchema" @addField="addFieldToSchema" class="form"/>
      <!-- Dynamically Styled Form Component -->
      <StyledForm :customization="customization" :formSchema="formSchema" class="form" />
    </div>
  </template>
  
  <script>
  import CustomizerForm from './CustomizerForm.vue';
  import StyledForm from './StyledForm.vue';
  
  export default {
    components: {
      CustomizerForm,
      StyledForm
    },
    data() {
      return {
        // Shared state for customization
        
        customization: {
          color: 'black',  // Default color
          font: 'Arial'    // Default font
        },
      formSchema: [
        {
          type: "text",
          label: "Full Name",
        },
        {
          type: "email",
          label: "Email Address",
        }
      ]
      };
    },
    methods: {
      addFieldToSchema(newField) {
      this.formSchema.push(newField);  // Update the form schema with the new field
      }
    }
  };
  </script>
  