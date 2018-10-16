<template>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        :key="messages"
        ripple
      >
        Messages

      </v-tab>
        <v-tab
        :key="users"
        ripple
      >
        Users

      </v-tab>
      <v-tab-item
        :key="messages"
      >
        <messages></messages>
      </v-tab-item>
      <v-tab-item
        :key="users"
      >
        <users></users>
      </v-tab-item>
    </v-tabs>
</template>

<script>

import Users from '../components/Users.vue';
import Messages from '../components/Messages.vue';
import router from '../router';


export default {
  name: 'connected',
  components:{
    Users,
    Messages,
    router
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
