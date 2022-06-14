<template>
  <v-app id="default">
    <ToolBar />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";

export default {
  name: "App",

  components: {
    ToolBar,
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
</style>
