<template>
  <div>
    <v-form @submit.prevent="addTask" ref="form">
      <v-text-field
        v-model="task"
        outlined
        label="Add your new task"
        :rules="rules"
        required
      ></v-text-field>

      <div class="d-flex justify-end">
        <v-btn type="submit" elevation="0" color="primary">Add New Task</v-btn>
      </div>
    </v-form>

    <v-list v-for="(task,i) in tasks" :key="i">
      <v-list-item>
        <v-list-item-action>
          <v-checkbox></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content> {{ task }} </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on" v-bind="attrs">
                <v-icon color="primary">mdi-account-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
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
  data() {
    return {
      task: null,
      rules: [(v) => !!v || ''],
    }
  },
  methods: {
    addTask() {
      if (!this.$refs.form.validate()) return
      this.$store.commit('task/setTask', this.task)
    },
  },
}
</script>

<style></style>
