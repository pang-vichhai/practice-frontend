<template>
  <div>
    <v-text-field outlined label="Add your new task"></v-text-field>

    <v-list v-for="(task, i) in tasks" :key="i">
      <v-list-item>
        <v-list-item-action>
          <v-checkbox></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content> {{ task.title }} </v-list-item-content>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-content> {{ task.date }} </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('task', { tasks: 'tasks' }),
  },
}
</script>

<style></style>
