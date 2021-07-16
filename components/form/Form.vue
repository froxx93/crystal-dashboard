<template>
  <div class="form">
    <div v-if="!bare" class="form-header">
      <div class="actions">
        <b-button
          v-if="isEditable"
          variant="primary"
          :disabled="isEdit"
          size="sm"
          @click="toggleEdit"
        >
          <feather-icon icon="EditIcon" size="16" />
        </b-button>
      </div>
    </div>
    <validation-observer ref="form-validator" tag="form">
      <b-row>
        <b-col
          v-for="(input, inputId) in inputs"
          :key="inputId"
          :md="input.type !== 'placeholder' && (input.size || 6)"
        >
          <b-form-group
            v-if="input.type !== 'placeholder'"
            :label="input.label"
            :label-for="input.id"
            :required="isRequired(input)"
            :class="{
              'has-plaintext': isReadonly,
            }"
          >
            <!-- TODO: Fix name -->
            <validation-provider
              v-slot="{ errors }"
              :name="input.label"
              :rules="input.validationRules"
            >
              <b-form-input
                :id="input.id"
                v-model="input.model"
                :type="input.type"
                :state="errors.length > 0 ? false : null"
                :placeholder="(isReadonly && '–') || input.placeholder"
                :readonly="isReadonly"
                :class="{
                  'form-control-plaintext': isReadonly,
                }"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
    </validation-observer>
    <div v-if="!bare && isSaveable" class="form-footer">
      <div class="footer-left">
        <b-button v-if="isEdit" @click="toggleEdit">Abbrechen</b-button>
      </div>
      <div class="footer-right">
        <b-button variant="primary" @click="submit">{{
          (isCreate && 'Anlegen') || 'Speichern'
        }}</b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { BRow, BCol, BFormGroup, BFormInput, BButton } from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import '@/utils/validations'
import { FormInput } from '@/components/form/FormInput'

export type FormMode = 'create' | 'edit' | 'readonly'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BButton,
    ValidationProvider,
    ValidationObserver,
  },
  props: {
    mode: {
      type: String as () => FormMode,
      default: 'create',
    },
    inputs: {
      type: Array as () => FormInput[],
      default: () => [],
    },
    onSubmit: {
      type: Function as PropType<(...args: any[]) => void>,
      default: () => null,
    },
    bare: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modeTemp: this.mode,
    }
  },
  computed: {
    isReadonly(): boolean {
      return this.modeTemp === 'readonly'
    },
    isEdit(): boolean {
      return this.modeTemp === 'edit'
    },
    isCreate(): boolean {
      return this.modeTemp === 'create'
    },
    isEditable(): boolean {
      // TODO: add ACL condition
      return this.mode === 'edit' || this.mode === 'readonly'
    },
    isSaveable(): boolean {
      return this.isEdit || this.isCreate
    },
  },
  methods: {
    toggleEdit(): void {
      if (this.isReadonly) {
        this.modeTemp = 'edit'
      } else if (this.isEdit) {
        this.modeTemp = 'readonly'
      }
    },
    isRequired(input: FormInput): boolean {
      return !!input.validationRules?.split(' ').includes('required')
    },
    submit(): void {
      this.validate().then(() => {
        this.onSubmit()
      })
    },
    validate(): Promise<boolean> {
      return new Promise((resolve, reject) => {
        ;(this.$refs['form-validator'] as any)
          .validate()
          .then((success: boolean) => {
            if (success) {
              resolve(true)
            } else {
              // eslint-disable-next-line prefer-promise-reject-errors
              reject()
            }
          })
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/base/colors';

.actions > *:first-child {
  display: block;
  margin-left: auto;
}

.form-group:not(.has-plaintext)[required] > label:after {
  content: '*';
  color: $danger;
}

.form-control {
  &[readonly] {
    background-color: transparent;
  }

  &.form-control-plaintext {
    border: 0;
    box-shadow: none;

    &::placeholder {
      transform: none;
    }
  }
}

.form-footer {
  .footer-left {
    float: left;
  }

  .footer-right {
    float: right;
  }
}
</style>

<style lang="scss">
@import '@/assets/scss/vue/libs/vue-select.scss';
</style>
