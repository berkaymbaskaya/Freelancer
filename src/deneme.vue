<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <img class="logo" src="../assets/logo.png"/>
        <a class="navbar-brand" href="https://metodyazilim.com/">Metod Yazılım</a>
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profil</a>
            </li>
          </ul>
          <span class="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
    </nav>
    </template>
    <script>
    export default {
      name: 'deneme',
    }
    </script>
    <style>
    .logo {
    height: 40px;
    width: 40px;
    margin-right:10px;
    }
    </style>