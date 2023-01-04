<template>
  <div>
    <v-text-field outlined label="Add your new task"></v-text-field>

    <v-list>
      <v-list-item>
        <v-list-item-action>
          <v-checkbox></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-content> First App </v-list-item-content>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-content> Date </v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="red">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
