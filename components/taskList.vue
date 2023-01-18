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
        <div
          class="text-body-1"
          :class="update.done === false ? '' : 'text-decoration-line-through'"
        >
          {{ task.content }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="d-flex justify-space-between">
          <v-btn @click="toBeDone" dark :color="update.done ? 'red' : 'green'"
            ><span>{{ update.done ? 'Undone' : 'Done' }}</span
            ><v-icon right>mdi-check-all</v-icon></v-btn
          >
          <v-btn @click="goToEdit(task.id)" dark color="blue"
            ><span>Edit</span
            ><v-icon right>mdi-text-box-edit-outline</v-icon></v-btn
          >
          <v-btn
            @click="deleteTask"
            color="error"
            :disabled="update.done ? false : true"
            ><span>Delete</span><v-icon right>mdi-delete</v-icon></v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['task', 'id'],
  computed: {
    // ...mapGetters('task',['oneTask'])
  },
  methods: {
    // toBeDone() {
    //   this.done = !this.done
    // },
    async toBeDone() {
      this.update.done = !this.update.done
      await this.$store
        .dispatch('task/apiMakeDone', this.update)
        .then(this.$store.dispatch('task/apiGetAllTask'))
    },
    deleteTask() {
      this.$emit('deleteTask', this.task.id)
    },
    goToEdit(id) {
      this.$router.push(`task/${id}`)
    },
    // getOneTask() {
    //   this.$store.dispatch('task/apiGetOneTask', this.task.id).then((res) => {
    //     this.update = res.data
    //   })
    // },
  },
  data() {
    return {
      update: JSON.parse(JSON.stringify(this.task)),
    }
  },
  // mounted(){
  //   this.getOneTask()
  // }
}
</script>

<style></style>
