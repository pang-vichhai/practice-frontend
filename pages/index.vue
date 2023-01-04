<template>
  <div>
    <v-form>
      <v-text-field
        v-model="task"
        outlined
        label="Add your new task"
      ></v-text-field>

    </v-form>

    <div class="d-flex justify-end">
      <v-btn @click="addTask" elevation="0" color="primary">Add New Task</v-btn>
    </div>

    <v-list v-for="(task, i) in tasks" :key="i">
      <v-list-item>
        <v-list-item-action>
          <v-checkbox></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content> {{ task.title }} </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on" v-bind="attrs">
                <v-icon color="primary">mdi-file-find</v-icon>
              </v-btn>
            </template>
            <span>Preview</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on" v-bind="attrs">
                <v-icon color="red">mdi-delete</v-icon>
              </v-btn>
            </template>
            <span>Delete</span>
          </v-tooltip>
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
  date() {
    return {
      task: null,
    }
  },
  methods: {
    addTask() {},
  },
}
</script>

<style></style>
