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
    <MainNav />
  </div>
</template>

<script>
import MainNav from "@/components/nav/MainNav.vue";

export default {
  components: {
    MainNav,
  },

  data() {
    return {
      windowSize: null,
      navLocation: null,
    };
  },
};
</script>
