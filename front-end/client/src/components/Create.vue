<template>
  <div class="create">
    <v-app id="app">
      <v-layout justify-center class="mt-5">
        <v-flex xs12 sm10 md8 lg6>
          <v-card ref="form">
          <h2 class="py-4 font-weight-bold headline">Create Post</h2>
            <v-card-text>
              <v-text-field
                ref="title"
                v-model="post.title"
                :rules="[
              () => !!post.title || 'This field is required',
              () => !!post.title && post.title.length <= 25 || 'Title must be less than 25 characters',
              post.titleCheck
            ]"
                label="Title"
                placeholder="Enter post title"
                counter="25"
                required
                clearable
              ></v-text-field>
              <v-textarea
                ref="body"
                v-model="post.body"
                :rules="[
              () => !!post.body || 'This field is required',
              () => !!post.body && post.body.length <= 25 || 'Body must be less than 25 characters',
              post.bodyCheck
            ]"
                label="Body"
                placeholder="Enter post body"
                counter="300"
                required
                clearable
                auto-grow
              ></v-textarea>
            </v-card-text>
            <v-divider class="mt-5"></v-divider>
            <v-card-actions>
              <v-btn flat>Cancel</v-btn>
              <v-spacer></v-spacer>
              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <template v-slot:activator="{ on }">
                    <v-btn icon class="my-0" @click="resetForm" v-on="on">
                      <v-icon>refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
              <v-btn color="primary" flat @click="addToApi">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "create",
  data() {
    return {
      rules: [v => v.length <= 25 || "Max 25 characters"],
      post: {
        title: null,
        body: null
      }
    };
  },
  methods: {
    addToApi() {
      let newPost = {
        title: this.post.title,
        body: this.post.body
      }
      
      axios.post("http://localhost:3000/posts/create", newPost)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    }
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
