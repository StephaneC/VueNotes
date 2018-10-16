<template>
  <div class="hello">
    <div>
        <v-form v-model="valid">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 sm6 md3>
                  <v-text-field
                      v-model="name"
                      :counter="10"
                      label="Name"
                      required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md3>
                  <v-text-field
                      v-model="pwd"
                      label="Password"
                      required></v-text-field>
                    </v-flex>
                      <v-btn color="success" v-on:click="login">Login</v-btn>
                      <v-btn color="success" v-on:click="signup">Create account</v-btn>
                </v-layout>
              </v-container>
         </v-form>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'Login',
  props: {
    name: String,
    pwd: String,
    msg: String,
  },
  methods: {
    login: function(){
      fetch('https://cesi.cleverapps.io/signin',
      {
        method: "POST",
        headers: {
          'content-type':'application/x-www-form-urlencoded'
        },
          body: "username="+this.name+"&pwd="+this.pwd
      })
      .then(function(response) {
        if(response.ok){
          return response.json().then(function(jsn){
            sessionStorage.setItem("token", jsn.token);
            router.push('/connected')
          });
        } else {
          //TODO error
          alert("login error");
        }
      });
    },
    signup: function(){
      fetch('https://cesi.cleverapps.io/signup',
      {
          method: "POST",
          headers: {
            'content-type':'application/x-www-form-urlencoded'
          },
          body: "username="+this.name+"&pwd="+this.pwd
        })
      .then(function(response) {
        if(response.ok){
          // create account ok. Let's login.
          login();
        } else {
          //TODO error
          alert("signup error");
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
