<template>
  <form-wizard-number :data="data" @success="onSuccess" />
</template>

<script lang="ts">
import { FormWizard } from '@/components/form-wizard/FormWizard'
import ToastificationContent from '@/components/toastification/ToastificationContent.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  data() {
    const data: FormWizard = {
      tabs: [
        {
          id: 'tab1',
          title: 'Tab 1',
          headline: 'Headline 1',
          subline: 'Subline 1',
          inputs: [
            {
              id: 'name',
              label: 'Name',
              placeholder: '',
              model: '',
              validationRules: 'required',
            },
          ],
        },
      ],
    }

    return {
      data,
    }
  },
  methods: {
    onSuccess(): void {
      // dispatch create
      new Promise(() => true)
        .then(() => {
          this.$toast.success({
            component: ToastificationContent,
            props: {
              title: 'Success!',
              icon: 'CheckCircleIcon',
              variant: 'success',
            },
          })

          this.$router.push({
            name: 'index',
          })
        })
        .catch((err) => {
          this.$toast.error({
            component: ToastificationContent,
            props: {
              title: `Error: ${err}`,
              variant: 'error',
            },
          })
        })
    },
  },
}
</script>
