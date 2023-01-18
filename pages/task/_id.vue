<template>
  <div>
    <v-container v-if="newEdit">
      <v-form @submit.prevent="updateTask">
        <v-text-field v-model="newEdit.content" outlined></v-text-field>
        <div class="d-flex justify-end">
          <v-btn color="red" elevation="0" @click="cancel" dark class="mx-2"
            >Cancel</v-btn
          >
          <v-btn color="primary" elevation="0" type="submit"
            >Update</v-btn
          >
        </div>
      </v-form>
    </v-container>
    <div v-else class="d-flex justify-center">
      <v-btn to="/">Back Home</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // newEdit: task
      newEdit: null,
    }
  },
  computed: {
    ...mapGetters('task', { task: 'task' }),
    id() {
      return this.$route.params.id
    },
  },
  methods: {
    cancel() {
      this.$router.push('/')
    },
    async updateTask() {
      await this.$store
        .dispatch('task/apiUpdateTask', this.newEdit)
        .then(
          this.$store.dispatch('task/apiGetAllTask'),
          this.$router.push('/'))
    },
    getOneTask() {
      this.$store.dispatch('task/apiGetOneTask', this.id).then((res) => {
         this.newEdit = res.data      
      })
    },
  },
  mounted() {
    this.getOneTask()
  },
}
</script>

<style></style>
