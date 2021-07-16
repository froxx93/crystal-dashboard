<template>
  <form-wizard
    color="#7367F0"
    :title="null"
    :subtitle="null"
    shape="square"
    finish-button-text="Anlegen"
    back-button-text="Zurück"
    next-button-text="Weiter"
    @on-complete="formSubmitted"
  >
    <tab-content
      v-for="(tab, tabId) in data.tabs"
      :key="tabId"
      :title="tab.title"
      :before-change="() => validateForm(tabId)"
    >
      <b-col cols="12" class="mb-2">
        <h5 class="mb-0">{{ tab.headline }}</h5>
        <small class="text-muted">{{ tab.subline }}</small>
      </b-col>
      <Form
        ref="form"
        mode="create"
        :bare="true"
        :inputs="tab.inputs"
        @submit="(ref) => validateForm(ref)"
      />
    </tab-content>
  </form-wizard>
</template>

<script lang="ts">
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import Form from '@/components/form/Form.vue'
import { FormWizard as FormWizardType } from './FormWizard'

export default {
  components: {
    FormWizard,
    TabContent,
    Form,
  },
  props: {
    data: {
      type: Object as () => FormWizardType,
      required: true,
    },
  },
  data() {
    return {
      formRef: [],
    }
  },
  methods: {
    formSubmitted(): void {
      this.$emit('success')
    },
    validateForm(tabId: number): Promise<boolean> {
      return (this.$refs.form as any)[tabId].validate()
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vue/libs/vue-wizard.scss';

.vue-form-wizard {
  box-shadow: none;
}
</style>
