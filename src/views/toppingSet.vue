<template>
  <v-app>
    <v-row>
      <v-col v-for="(item, i) in items" :key="item">
        <toppingCard :toppingOpt="items[i]" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import toppingCard from "@/components/toppings/toppingCard.vue";

export default {
  components: {
    toppingCard,
  },

  data() {
    return {
      items: [{ topping: "raspberry", subCool: "1.2" }],
    };
  },
};
</script>
