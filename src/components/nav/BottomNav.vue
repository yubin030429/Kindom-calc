<template>
  <v-bottom-navigation v-if="visiable" app color="orange lighten-2" grow>
    <v-btn
      v-for="item in items"
      :to="item.route"
      :key="item"
      text
      height="100%"
    >
      <span>{{ item.title }}</span>

      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: null,
      visiable: null,
      items: [
        { title: "토핑세팅", icon: "mdi-cards-diamond", route: "/toppingSet" },
        { title: "별사탕/파우더", icon: "mdi-octagram", route: "/powder" },
      ],
    };
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
      if (this.windowWidth < 800) {
        this.visiable = true;
      } else {
        this.visiable = false;
      }
    },
  },
};
</script>
