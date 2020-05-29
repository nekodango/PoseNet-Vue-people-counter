<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    ><div class="d-flex align-center">
        PoseNet people counter
      </div>
    </v-app-bar>

    <v-content>
      <Camera/>
    </v-content>
  </v-app>
</template>

<script>
import Camera from "@/components/Camera";

export default {
  name: 'App',

  components: {
    Camera
  },

  data: () => ({
    drawer: false,
  }),
};
</script>
