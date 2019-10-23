<template>
  <div class="principal-content">
    <h1 class="title-home">Começando com <span class="color-vue">VueJS</span></h1>
    <hr>
  </div>
</template>

<script>

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

  body {  
    font-family: 'Titillium Web', sans-serif;
    background-color: #292b2f;
  }
  .principal-content {
    margin-left: 23%;
    height: 100vh;
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
  }
</style>