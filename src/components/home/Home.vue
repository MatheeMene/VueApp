<template>
  <div class="principal-content">
    <h1 class="title-home">Começando com <span class="color-vue">VueJS</span></h1>
    <hr>
    <div>
      <ul class="list-itens" style="list-style-type: none;">
        <li class="itens" v-bind:key="link.id" v-for="link of links">
          <img class="img-responsive" :src="link.image" :alt="link.title">
          <div class="card">
            <h3 class="image-title"> {{ link.title }} </h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

    data () {

      return {

        links: []
        
      }
    },
    created() {
      
      this.$http.get("http://localhost:3000/data")
        .then(res => res.json())
        .then(res => this.links = res);
      
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

  body, html {  
    font-family: 'Titillium Web', sans-serif;
    background-color: #292b2f;
  }
  .principal-content {
    margin-left: 23%;
    height: 100vh;
    padding-left: 2%;
  }
  .title-home {
    text-align: center;
    color: whitesmoke;
    font-size: 1.8em;
    padding-top: 2%;
  }
  .color-vue {
    color: #41b883;
  }
  hr {
    border: 0;
    height: 1px;
    width: 80%;
    background-image: linear-gradient(to right, rgba(169, 169, 169, 0), rgba(169, 169, 169, .75), rgba(169, 169, 169, 0));
    margin-bottom: 2%;
  }
  .list-itens {
    display: flex;
    flex-wrap: wrap;
  }
  .itens {
    width: 20%;
    margin-top: 5%;
    margin-left: 9%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .5);
    transition: 0.3s;
    border-radius: 5px;
  }
  .itens:hover {
   box-shadow: 0 5px 8px 0 rgba(0, 0, 0, .8);
  }
  .img-responsive {
    width: 100%;
    border-radius: 5px 5px 0 0;
  }
  .card {
    background-color: rgba(40, 40, 40, .98);
    padding-bottom: 2em;
    border-radius: 5px;
  }
  .card .image-title {
    color: #41b883;
    font-weight: bold;
    font-family: 'Muli', sans-serif;
    font-size: .9em;
    text-align: center;
  }

</style>