<template>
  <v-card
    v-if="visiable"
    style="top: 10px"
    elevation="0"
    height="840px"
    width="240"
  >
    <v-navigation-drawer permanent>
      <NavContent />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NavContent from "@/components/nav/NavContent.vue";

export default {
  data() {
    return {
      windowWidth: null,
      visiable: null,
    };
  },

  components: {
    NavContent,
  },

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },

  watch: {
    windowWidth: function () {
      if (this.windowWidth > 800) {
        this.visiable = true;
      } else {
        this.visiable = false;
      }
    },
  },
};
</script>
