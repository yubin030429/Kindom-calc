<template>
  <div>
    <v-app>
      <v-row>
        <v-col v-for="(item, i) in items" :key="item">
          <toppingCard :toppingOpt="items[i]" />
        </v-col>
      </v-row>
      <EditBtn />
    </v-app>
  </div>
</template>

<script>
import toppingCard from "@/components/toppings/toppingCard.vue";
import EditBtn from "@/components/EditBtn.vue";

export default {
  components: {
    toppingCard,
    EditBtn,
  },

  data() {
    return {
      items: [
        { topping: "raspberry", subCool: "1.2" },
        { topping: "raspberry", subCool: "1.2" },
      ],
    };
  },
};
</script>

<style></style>
