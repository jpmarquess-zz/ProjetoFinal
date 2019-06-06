<template>
  <div class="home">
    <v-app id="app">
      <v-toolbar dark color="blue darken-4">
        <v-toolbar-title>Home</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">Home</v-btn>
          <v-btn flat to="login">Login</v-btn>
          <v-btn flat to="signup">Signup</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <div v-for="post in posts" :key="post.post_id">
                <v-card>
                  <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{ post.title }}</h3>
                      <div>{{ post.body }}</div>
                    </div>
                  </v-card-title>

                  <v-card-actions>
                    <router-link v-bind:to="'posts/' + post.post_id">
                      <v-btn flat color="orange">Explore</v-btn>
                    </router-link>
                  </v-card-actions>
                </v-card>
              </div>
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
  name: "home",
  data() {
    return {
      posts: {}
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/posts")
      .then(response => {
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
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
