<template>
  <v-app id="default">
    <ToolBar />

    <v-main style="position: absolute" :class="mainClass">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: "App",

  data() {
    return {
      mainClass: null,
      windowWidth: null,
    };
  },

  components: {
    ToolBar,
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
        this.mainClass = "leftNav";
      } else {
        this.mainClass = "bottomNav";
      }
    },
  },
};
</script>

<style>
#default {
  font-family: "CookieRunRegular", sans-serif !important;
}

@font-face {
  font-family: "CookieRunBlack";
  src: url("@/assets/fonts/CookieRunBlack.ttf");
}
@font-face {
  font-family: "CookieRunBold";
  src: url("@/assets/fonts/CookieRunBold.ttf");
}
@font-face {
  font-family: "CookieRunRegular";
  src: url("@/assets/fonts/CookieRunRegular.ttf");
}

.leftNav {
  margin-left: 250px;
  margin-top: 60px;
}

.bottomNav {
  margin-left: 10px;
  margin-top: 60px;
}
</style>
