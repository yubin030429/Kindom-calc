<template>
  <div>
    <v-card>
      <v-card-title> {{ $props.toppingOpt.topping }} </v-card-title>

      <v-card-content> {{ $props.toppingOpt.subCool }} </v-card-content>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["toppingOpt"],
};
</script>
