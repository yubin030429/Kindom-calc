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

    <LeftNav v-if="windowSize" />
    <BottomNav v-else />
  </div>
</template>

<script>
import LeftNav from "@/components/nav/LeftNav.vue";
import BottomNav from "@/components/nav/BottomNav.vue";

export default {
  name: "App",

  data() {
    return {
      windowSize: null,
    };
  },

  created() {
    window.addEventListener("resize", this.windowSizeChange);

    this.windowSizeChange();
  },
  destroyed() {
    window.removeEventListener("resize", this.windowSizeChange);
  },
  methods: {
    windowSizeChange() {
      if (window.innerWidth > 600) {
        this.windowSize = true;
      } else {
        this.windowSize = false;
      }
    },
  },

  components: {
    LeftNav,
    BottomNav,
  },
};
</script>
