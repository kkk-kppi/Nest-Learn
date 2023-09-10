<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="fetchApp">fetch app / Get</button>
      <label>{{ getData }}</label>
    </div>
    <div>
      <button @click="fetchAppByPost">fetch app / Post</button>
      <label>{{ postData }}</label>
    </div>
    <div>
      <button @click="fetchCats">fetch cars / Post</button>
      <label>{{ postData }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      getData: null,
      postData: null
    }
  },
  methods: {
    // Example POST method implementation:
    async postFetch(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response;
      // return response.json(); // parses JSON response into native JavaScript objects
    },
    fetchApp() {
      fetch('/v1/api').then((response) => response.text()).then(data => {
        this.getData = data
      })
    },
    fetchAppByPost() {
      this.postFetch('/v1/api').then((response) => {
        return response.text()
      }).then( data => {
        console.log(data)
        this.postData = data
      })
    },
    fetchCats() {
      this.postFetch('/v1/api/cats/create', {
        name: '小张',
        age: 1
      }).then( response => response.json())
      .then( data => {
        console.log(data)
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
