<template>
  <div>
    <BForm @submit.prevent="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="user.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="user.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </BForm>
  </div>
</template>

<script>

import Vue from 'vue'
import Component from 'vue-class-component'
import { BForm, BFormGroup, BFormInput } from 'bootstrap-vue'
import { createUser } from '../../../firebase'

@Component({
  components: {
    BForm,
    BFormInput,
    BFormGroup
  }
})

export default class UserCreateForm extends Vue {
  user = { name: '', email: '' }

  async onSubmit () {
    await createUser({ ...this.user })
    this.user.name = ''
    this.user.email = ''
  }
}
</script>

<style scoped>
</style>
