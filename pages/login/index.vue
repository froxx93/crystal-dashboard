<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <b-img :src="appLogoImage" alt="logo" />
        </b-link>

        <!-- form -->
        <validation-observer ref="loginForm" v-slot="{ invalid }">
          <b-form class="auth-login-form mt-2" @submit.prevent="login">
            <!-- username -->
            <b-form-group label-for="username" label="Username">
              <validation-provider
                v-slot="{ errors }"
                name="username"
                rules="required|email"
              >
                <b-form-input
                  id="username"
                  v-model="username"
                  name="login-username"
                  :state="errors.length > 0 ? false : null"
                  placeholder="john@example.com"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Password</label>
                <b-link :to="{ name: 'auth-forgot-password-v1' }">
                  <small>Forgot password?</small>
                </b-link>
              </div>
              <validation-provider
                v-slot="{ errors }"
                name="password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false : null"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button variant="primary" type="submit" block :disabled="invalid">
              Login
            </b-button>
          </b-form>
        </validation-observer>

        <b-card-text class="text-center mt-2">
          <b-link :to="{ name: 'auth-register' }">
            <span>Register</span>
          </b-link>
        </b-card-text>

        <div class="divider my-2">
          <div class="divider-text">or</div>
        </div>

        <!-- social button -->
        <div class="auth-footer-btn d-flex justify-content-center">
          <b-button href="javascript:void(0)" variant="facebook">
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button href="javascript:void(0)" variant="twitter">
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button href="javascript:void(0)" variant="google">
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button href="javascript:void(0)" variant="github">
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div>
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script lang="ts">
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { $themeConfig } from '@/themeConfig'
import {
  BButton,
  BForm,
  BFormInput,
  BFormGroup,
  BCard,
  BLink,
  BCardText,
  BInputGroup,
  BInputGroupAppend,
} from 'bootstrap-vue'
import { required, email } from '@/utils/validations'
import { togglePasswordVisibility } from '@/components/mixins/forms'
import { handleLoginStatus } from '@/components/mixins/routing'
import ToastificationContent from '@/components/toastification/ToastificationContent.vue'
import { Credentials } from '@/store/auth'

export default {
  components: {
    // BSV
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BCard,
    BLink,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility, handleLoginStatus],
  data() {
    const { appLogoImage } = $themeConfig.app

    return {
      appLogoImage,

      username: '',
      password: '',

      // validation rules
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon(): string {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    login() {
      ;(this.$refs.loginForm as InstanceType<typeof ValidationProvider>)
        .validate()
        .then((success) => {
          if (success) {
            // useJwt
            //   .login({
            //     username: this.username,
            //     password: this.password,
            //   })
            const credentials: Credentials = {
              username: this.username,
              password: this.password,
            }

            this.$store
              .dispatch('auth/login', credentials)
              .then((userData) => {
                // this.$ability.update(userData.ability)

                // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
                // this.$router.replace('index').then(() => {
                this.$toast.success({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: `Welcome ${userData.username}`,
                    icon: 'CoffeeIcon',
                    variant: 'success',
                    text: `You have successfully logged in as ${userData.roles[0]}. Now you can start to explore!`,
                  },
                })

                // this will trigger the handleLoginStatus mixin and therefore probably redirect
                this.$forceUpdate()
              })
              .catch((error) => {
                ;(
                  this.$refs.loginForm as InstanceType<
                    typeof ValidationProvider
                  >
                ).setErrors([])

                if (error.response) {
                  this.$toast.error({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: 'Es ist ein Fehler aufgetreten',
                      variant: 'error',
                    },
                  })
                }
              })
          }
        })
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vue/pages/page-auth.scss';

.body-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    background-image: -webkit-linear-gradient(
      280deg,
      rgba(150, 150, 150, 0.2) 25%,
      #bebebe 85%
    );
    background-image: -o-linear-gradient(
      280deg,
      rgba(150, 150, 150, 0.2) 25%,
      #bebebe 85%
    );
    background-image: -moz-linear-gradient(
      280deg,
      rgba(150, 150, 150, 0.2) 25%,
      #bebebe 85%
    );
    background-image: linear-gradient(
      280deg,
      rgba(150, 150, 150, 0.2) 25%,
      #bebebe 85%
    );
    opacity: 0.9;
  }
}

.auth-inner {
  &::before,
  &::after {
    display: none;
  }
}
</style>
