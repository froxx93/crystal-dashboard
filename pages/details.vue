<template>
  <BCard title="Details">
    <Form :inputs="inputs" mode="readonly" />
  </BCard>
</template>

<script lang="ts">
import Form from '@/components/form/Form.vue'
import { FormInput } from '@/components/form/FormInput'

export default {
  components: {
    Form,
  },
  data() {
    const inputs: FormInput[] = [
      {
        id: 'field',
        label: 'Field',
        model: '',
        placeholder: '',
        validationRules: 'required',
      },
    ]

    return {
      inputs,
    }
  },
}
</script>
