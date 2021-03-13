<template>
  <form>
    <label> Email
      <input v-model="formData.username"
             :id="'username'+compId"
             name="username"
             ref="username"/>
    </label>

    <label> Password
      <input v-model="formData.password"
             :id="'password'+compId"
             name="password"
             type="password"
             ref="password"/>
    </label>
    <button :disabled="!formValid">Submit form</button>
  </form>
</template>

<script>
import { detectAutofill } from '@/utils/detectAutofill'

export default {
  name: 'exampleForm',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      formAutoFilled: false
    }
  },
  props: {
    checkAutofill: Boolean
  },
  computed: {
    formValid () {
      return (this.formData.username && this.formData.password) || this.formAutoFilled
    },
    compId () {
      return this._uid
    }
  },
  methods: {
    async checkForAutofill () {
      const usernameFilled = await detectAutofill(this.$refs.username)
      const passwordFilled = await detectAutofill(this.$refs.password)

      this.formAutoFilled = usernameFilled && passwordFilled
    }
  },
  mounted () {
    if (this.$props.checkAutofill) {
      this.checkForAutofill()
    }
  }
}
</script>

<style scoped lang="scss">
form {
  max-width: 420px;
  margin: 1rem auto;
  padding: 1rem;
  background: #eee;
  border-radius: 5px;

  label {
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 1px;
  }

  input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 0.25rem;
    border-radius: 0.25rem;
    font-size: 14px;
    outline: none;
    border: 1px solid #999;
  }

  button {
    display: block;
    margin-left: auto;
    border: none;
    background: blueviolet;
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 0.25rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    letter-spacing: 1px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
