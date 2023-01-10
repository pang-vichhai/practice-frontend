<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-content
            :class="done ? 'text-decoration-line-through' : ''"
          >
            {{ task.content }}
          </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attr }">
              <v-btn @click="toBeDone" icon v-on="on" v-bind="attr">
                <v-icon color="green">mdi-check-all</v-icon>
              </v-btn>
            </template>
            <span>Done</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attr }">
              <v-btn @click="goToEdit(task.id)" icon v-on="on" v-bind="attr">
                <v-icon color="primary">mdi-account-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attr }">
              <v-btn @click="deleteTask" icon v-on="on" v-bind="attr">
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
export default {
  props: ['task','id'],
  methods: {
    toBeDone() {
      this.done = true
    },
    // deleteTask(id){
    //     this.$store.dispatch('task/apiDeleteTask',id)
    // },
    deleteTask(){
      this.$emit('deleteTask',this.task.id)
    },
    goToEdit(id){
      this.$router.push(`task/${id}`)
    },
  },
  data() {
    return {
      done: false,
    }
  },
}
</script>

<style></style>
