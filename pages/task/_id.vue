<template>
  <v-container>
    <v-form>
      <v-text-field v-model="task.content" outlined></v-text-field>
      <div class="d-flex justify-end">
        <v-btn color="red" elevation="0" @click="cancel" dark class="mx-2"
          >Cancel</v-btn
        >
        <v-btn color="primary" elevation="0" @click="update(task)">Update</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('task', { task: 'task' }),
  },
  methods: {
    cancel() {
      this.$router.push('/')
    },
    update(tas){
      this.$store.dispatch('task/apiUpdateTask',tas)
    }
  },
}
</script>

<style></style>
