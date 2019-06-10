<template>
  <div class="show">
    <v-app id="app">
      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <div v-for="post in posts" :key="post.post_id" class="mt-5">
                <v-card class="mb-5">
                  <v-img :src="post.image" height="600px"></v-img>

                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-3">{{ post.title }}</h3>
                      <div>{{ post.body }}</div>
                    </div>
                  </v-card-title>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <v-text class="headline" style="color: rgba(0, 0, 0, 0.87)">Comment Section</v-text>

      <v-content class="mt-4">
        <v-container fluid fill-height>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-textarea
                ref="comment"
                v-model="reply.body"
                :rules="[
              () => !!reply.body || 'This area is required',
              () => !!reply.body && reply.body.length <= 200 || 'Comment must be less than 200 characters',
              reply.bodyCheck
            ]"
                label="Comment"
                placeholder="Enter comment"
                counter="200"
                clearable
                auto-grow
              ></v-textarea>

              <v-btn dark color="blue darken-4 mt-5" @click="addToApi">Submit</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-content>
        <v-container fluid fill-height>
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <div v-for="comment in comments" :key="comment.comment_id" class="mt-5">
                <v-card class="mx-auto" min-width="100">
                  <v-card-title>
                    <span class="title font-weight-bold">{{ comment.username }}</span>
                  </v-card-title>

                  <v-card-text
                    class="subheading font-weight-light px-4 ml-3"
                    style="text-align: left"
                  >{{ comment.body }}</v-card-text>
                </v-card>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "show",
  data: () => {
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"];
    return {
      rules: [v => v.length <= 200 || "Max 200 characters"],
      posts: {},
      comments: {},
      reply: {}
    };
  },

  methods: {
    addToApi() {
      let newReply = {
        body: this.reply.body
      };

      axios
        .post("http://localhost:3000/posts/comment/reply/" + this.$route.params.id, newReply
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });

      location.reload();
    }
  },

  mounted() {
    axios
      .all([
        axios.get("http://localhost:3000/posts/" + this.$route.params.id),
        axios.get("http://localhost:3000/posts/comment/" + this.$route.params.id
        )
      ])
      .then(
        axios.spread((postRes, commentRes) => {
          this.posts = postRes.data;
          this.comments = commentRes.data;
        })
      );
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
