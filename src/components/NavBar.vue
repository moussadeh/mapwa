<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Ma PWA</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa-solid fa-house"></i>&ensp;Accueil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa-solid fa-camera"></i>&ensp;Caméra
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa-solid fa-globe"></i>&ensp;Position géographique
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fa-solid fa-bars-staggered"></i>&ensp;Autres
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
  </style>
  