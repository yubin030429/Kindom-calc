<template>
  <v-card style="top: 1vh" flat height="93vh" width="240">
    <v-navigation-drawer permanent>
      <NavContent />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import NavContent from "@/components/nav/NavContent.vue";

export default {
  components: {
    NavContent,
  },
};
</script>
