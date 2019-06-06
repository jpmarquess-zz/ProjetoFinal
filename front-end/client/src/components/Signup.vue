<template>
  <div class="signup">
    <v-app id="app">
      <v-toolbar dark color="blue darken-4">
        <v-toolbar-title>Signup</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="login">Login</v-btn>
          <v-btn flat to="signup">Signup</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer app></v-footer>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
