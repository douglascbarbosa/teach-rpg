<template>
  <div>
    <b-table
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>

import Vue from 'vue'
import Component from 'vue-class-component'
import {BTable} from 'bootstrap-vue'
import {useLoadUsers} from '../../../firebase'

@Component({
  components: {
    BTable
  }
})
export default class UserList extends Vue{
  fields = [
    { key: 'Name', sortable: true },
    { key: 'Email', sortable: true },
  ]

  async mounted() {
    await console.log(useLoadUsers())
  }
}
</script>

<style scoped>

</style>
