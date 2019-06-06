<template>
  <div class="login">
    <v-app id="app">
      <v-toolbar dark color="blue darken-4">
        <v-toolbar-title>Login</v-toolbar-title>
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
            <v-flex xs12 sm8 md4>
              <v-card light class="elevation-12">
                <v-toolbar dark color="blue darken-4">
                  <v-toolbar-title>Login</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="login"
                      label="Login"
                      type="text"
                      color="blue darken-4"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      color="blue darken-4"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn dark color="blue darken-4">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
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
  name: "Login"
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
