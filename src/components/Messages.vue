<template>
  <div>
    <v-list two-line>
      <template v-for="message in messages"> 
        <v-list-tile
            :key="message.id"
            avatar
            @click=""
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="message.message"></v-list-tile-title>
            <v-list-tile-sub-title v-text="message.username"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <v-footer>
      <v-text-field v-model="message"
                    label="Votre message">
                    </v-text-field>
      <v-btn v-on:click="postMessage">Send</v-btn>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'messages',
  data: function(){
    return {
      message: '',
      messages: []
    }
  },
  created() {
    this.refreshLoop()
  },
  methods: {
    refreshLoop: function(){
      const self = this;
      self.getMessages();
      //refresh every 5sec
      setTimeout(function () {
          // Do Something Here
          // Then recall the parent function to
          // create a recursive loop.
          self.getMessages();
      }, 5000);
    },
    postMessage: function(){
      var self = this;
      fetch('https://cesi.cleverapps.io/messages',
      {
        method: "POST",
        headers: {
          'content-type':'application/x-www-form-urlencoded',
          'token': sessionStorage.getItem('token')
        },
          body: "message="+this.message
      })
      .then(function(response) {
        if(response.ok){
          //do nothing
          self.message = '';
          self.getMessages();
        } else {
          //TODO error
          alert("POST messages error");
        }
      });
    },
    getMessages: function(){
      var self = this;
      fetch('https://cesi.cleverapps.io/messages',
      {
          method: "GET",
          headers: {
            'content-type':'application/x-www-form-urlencoded',
            'token': sessionStorage.getItem('token')
          }
        })
      .then(function(response) {
        if(response.ok){
          return response.json().then(function(jsn){
            self.messages = jsn;            
          });
        } else {
          //TODO error
          alert("GET messages error");
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
