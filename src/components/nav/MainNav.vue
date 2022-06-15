<template>
<<<<<<< HEAD
  <v-card style="top: 1vh" flat height="93vh" width="240">
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list rounded class="d-flex">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-list-item>
      </v-list>
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
=======
  <div>asdf</div>
</template>
>>>>>>> parent of d23d25a (make left nav contents)
