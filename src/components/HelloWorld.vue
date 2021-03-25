<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-for="user in users" :key="user.email">{{ user.name }} - {{ user.email }}</p>
    <button @click="cek">Cek</button>
  </div>
</template>

<script>
import { GET_ALL_USERS_QUERY } from '../graphql/queries/userQueries'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  apollo: {
    users: {
        query: GET_ALL_USERS_QUERY
    }
  },
  data () {
    return {
      users: [],
    }
  },
  mounted () {
    console.log(this.users)
  },
  methods: {
    cek() {
      console.log(this.users)
    },
    manual() {
      this.loading = true
      this.users = await this.$apollo.query({ query: GET_ALL_USERS_QUERY })
      this.loading = false
      console.log(this.users)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
