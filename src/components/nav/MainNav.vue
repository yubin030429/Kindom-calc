<template>
  <v-card style="top: 1vh" flat height="93vh" width="240">
    <v-navigation-drawer permanent>
      <NavContent />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "토핑세팅", icon: "mdi-cards-diamond" },
        { title: "별사탕/파우더", icon: "mdi-octagram" },
      ],
    };
  },
};
</script>
