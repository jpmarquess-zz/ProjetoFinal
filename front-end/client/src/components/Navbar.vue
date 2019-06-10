<template>
    <v-toolbar dark color="blue darken-4">
    <v-toolbar-title>Home</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/create">Create</v-btn>
        <v-btn flat to="/login">Login</v-btn>
        <v-btn flat to="/signup">Signup</v-btn>
    </v-toolbar-items>
    </v-toolbar>
</template>