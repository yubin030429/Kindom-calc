<template>
  <div>
    <v-card flat>
      <v-toolbar height="60px" flat>
        <v-btn text to="/">
          <v-icon color="orange lighten-2" class="mr-4">mdi-castle</v-icon>
          <v-toolbar-title>Kingdom Calc.</v-toolbar-title>
        </v-btn>
      </v-toolbar>
      <MainNav />
      <BottomNav></BottomNav>
    </v-card>
  </div>
</template>

<script>
import MainNav from "@/components/nav/MainNav.vue";
import BottomNav from "@/components/nav/BottomNav.vue";

export default {
  components: {
    MainNav,
    BottomNav,
  },

  data() {
    return {};
  },
};
</script>
