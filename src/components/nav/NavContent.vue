<template>
  <v-list rounded>
    <v-list-item-group v-model="model" mandatory color="orange lighten-1">
      <v-list-item :to="item.route" v-for="(item, i) in items" :key="i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "토핑세팅", icon: "mdi-cards-diamond", route: "/" },
        { title: "별사탕/파우더", icon: "mdi-octagram", route: "/powder" },
      ],
    };
  },
};
</script>
