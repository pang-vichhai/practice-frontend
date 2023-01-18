<template>
  <div>
    <!-- <v-list>
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
                <v-icon :color="done ? 'red' : 'green'">mdi-check-all</v-icon>
              </v-btn>
            </template>
            <span>{{done?'Undone':'Done'}}</span>
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
    </v-list> -->
    <v-row class="ma-0 pa-0 my-3">
      <v-col cols="12" md="6">
        <div :class="done ? 'text-decoration-line-through' : ''">
          {{ task.content }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex justify-end">
          <v-btn
            @click="toBeDone"
            dark
            :color="done ? 'red' : 'green'"
            class="mx-1"
            ><span>{{done?'Undone':'Done'}}</span><v-icon right>mdi-check-all</v-icon></v-btn
          >
          <v-btn @click="goToEdit(task.id)" dark color="blue" class="mx-1"
            ><span>Edit</span
            ><v-icon right>mdi-text-box-edit-outline</v-icon></v-btn
          >
          <v-btn @click="deleteTask" dark color="red" class="mx-1"
            ><span>Delete</span><v-icon right>mdi-delete</v-icon></v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ['task', 'id'],
  methods: {
    toBeDone() {
      this.done = !this.done
    },
    // async toBeDone(){
    //   await this.$store.dispatch('task/apiMakeDone',{done: false})
    // },
    deleteTask() {
      this.$emit('deleteTask', this.task.id)
    },
    goToEdit(id) {
      this.$router.push(`task/${id}`)
    },
  },
  data() {
    return {
      done: null,
    }
  },
}
</script>

<style></style>
