<template>
  <div>
    <v-card flat width="700" class="mx-auto">
      <v-form @submit.prevent="addTask" ref="form">
        <v-text-field
          v-model="task"
          outlined
          label="Add your new task"
          :rules="rules"
          required
        ></v-text-field>

        <div class="d-flex justify-end">
          <v-btn type="submit" elevation="0" color="primary"
            >Add New Task</v-btn
          >
        </div>
      </v-form>

      <task-list :task="task" v-for="(task,i) in tasks" :id="i" :key="i"></task-list>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import taskList from '~/components/taskList.vue'
export default {
  components: { taskList },
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
