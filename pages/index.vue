<template>
  <div>
    <v-card flat width="700" class="mx-auto">
      <v-form @submit.prevent="addTask" ref="form">
        <v-text-field
          v-model="task"
          outlined
          label="Add your new task here!"
          :rules="rules"
          required
        ></v-text-field>

        <div class="d-flex justify-end">
          <v-btn type="submit" elevation="0" color="primary"
            >Add New Task</v-btn
          >
        </div>
      </v-form>

      <task-list :task="task" v-for="(task, i) in tasks" :key="i"></task-list>
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
    getAllTask() {
      this.$store.dispatch('task/apiGetAllTask')
    },
    async addTask() {
      const validate = this.$refs.form.validate()
      if (!validate) return
      await this.$store.dispatch('task/apiCreateTask', this.task)
      this.$refs.form.reset()
      this.getAllTask()
    },
    deleteTask(id) {
      this.$store.dispatch('task/apiDeleteTask', id)     
      this.getAllTask()
    },
  },
  mounted() {
    this.getAllTask()
  },
}
</script>

<style></style>
