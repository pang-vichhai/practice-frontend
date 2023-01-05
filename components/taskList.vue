<template>
  <div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-content
            :class="done ? 'text-decoration-line-through' : ''"
          >
            {{ task }}
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
              <v-btn icon v-on="on" v-bind="attr">
                <v-icon color="primary">mdi-account-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit</span>
          </v-tooltip>
        </v-list-item-action>
        <v-list-item-action>
          <v-tooltip>
            <template v-slot:activator="{ on, attr }">
              <v-btn icon v-on="on" v-bind="attr">
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
  props: ['task'],
  methods: {
    toBeDone() {
      this.done = true
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
