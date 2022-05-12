<template>
  <div class="create-user">
    <h1>Create user</h1>
    <UserForm></UserForm>
  </div>
</template>

<script>

import UserForm from '@/components/user/UserForm.vue'

export default {
  name: 'UserCreate',
  components: {
    UserForm
  }
}
</script>

<style scoped>

</style>
