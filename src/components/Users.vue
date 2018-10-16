<template>
  <ul id="users">
      <li v-for="user in users">
        {{ user }}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'users',
  data: function(){
    return {
      users: []
    }
  },
  methods: {
    created() {
      this.getUsers()
    },
    getUsers: function(){
      fetch('https://cesi.cleverapps.io/users',
      {
          method: "GET",
          headers: {
            'content-type':'application/x-www-form-urlencoded',
            'token': sessionStorage.getItem('token')
          }
        })
      .then(function(response) {
        if(response.ok){
          response.json().then(function(r){
            this.users = r;
          });
        } else {
          //TODO error
          alert("GET users error");
        }
      });
    },
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
