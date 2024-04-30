<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand text-white" href="#">
            <img src="../../public/images/pwaVueIcone.png" alt="icone pwa vue" class="iconeAccueil">
            
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  <b><i class="fa-solid fa-house"></i>&ensp;Accueil</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <b><i class="fa-solid fa-camera"></i>&ensp;Caméra</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <b><i class="fa-solid fa-globe"></i>&ensp;Position géographique</b>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                    <b><i class="fa-solid fa-bars-staggered"></i>&ensp;Autres</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style>
  /* Vous pouvez ajouter des styles supplémentaires ici */
  nav {
    background-color: #42b883;
  }

  .iconeAccueil {
    width: 100px;
  }
  </style>
  