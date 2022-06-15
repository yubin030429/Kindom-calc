<template>
  <div>
    <v-card flat height="6vh">
      <v-toolbar flat>
        <v-icon color="orange lighten-2" class="mr-4">mdi-castle</v-icon>
        <v-toolbar-title>Kingdom Calc.</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
    </v-card>

    <LeftNav v-if="navLocation" />
    <BottomNav v-else-if="navLocation == false"></BottomNav>
  </div>
</template>

<script>
import LeftNav from "@/components/nav/LeftNav.vue";
import BottomNav from "@/components/nav/BottomNav.vue";

export default {
  components: {
    LeftNav,
    BottomNav,
  },

  data() {
    return {
      windowSize: null,
      navLocation: null,
    };
  },
};
</script>
