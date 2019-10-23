<template>
  <nav>
    <div class="nav-left">
      <h2 class="titulo-nav">   Vue Brabo</h2>
      <ul class="nav-list">
        <li> Content1</li>
        <li> Content1</li>
        <li> Content1</li>
      </ul>
    </div>

  </nav>
</template>

<script>

</script>

<style>

  .nav-left {
    height: 100%;
    width: 23%;
    background-image: linear-gradient(-90deg, rgba(40, 40, 40, .98), rgba(22, 22, 24, .98));
    position: fixed;
    left: 0;
    box-shadow: 1px 1px 2px 0 rgba(22, 22, 24, .98);
  }
  .titulo-nav {
    text-align: center;
    margin-top: 15%;
    margin-left: 5%;
    font-size: 1.5em;
    color: rgb(169,169,169);
  }
  .titulo-nav::before {
    display: inline-block;
    margin: 0 0 4px -15px;
    height: 2px;
    content: " ";
    text-shadow: none;
    background-color: rgb(169,169,169);
    width: 20%;
    background-image: linear-gradient(to left, rgb(169,169,169), #252626);
    border-radius: 4px;
  }
  .titulo-nav::after {
    display: inline-block;
    margin:0 0 4px 8px;
    height: 2px;
    content: " ";
    text-shadow: none;
    background-color: rgb(169,169,169);
    width: 20%;
    background-image: linear-gradient(to right, rgb(169,169,169), #252626);
    border-radius: 4px;
  }
  .nav-list {
    color: rgb(169,169,169);
    list-style: none;
    text-align: center;
  }
  .nav-list li::before {
    display: inline-block;
    margin: 0 0 4px;
    height: .8px;
    content: " ";
    background-color: rgb(169,169,169);
    width: 7%;
    background-image: linear-gradient(to left, rgb(169,169,169), #252626);
    border-radius: 2px;
  }
  .nav-list li::after {
    display: inline-block;
    margin: 0 0 4px;
    height: .8px;
    content: " ";
    background-color: rgb(169,169,169);
    width: 7%;
    background-image: linear-gradient(to right, rgb(169,169,169), #252626);
    border-radius: 2px;
  }
  .nav-list li:first-child {
    margin-top: 10%;
  }
  .nav-list li + li {
    margin-top: 6%;
    text-decoration: none
  }
</style>