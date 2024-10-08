<template>
      <header id="header" class="header d-flex flex-column justify-content-center">

<i class="header-toggle d-xl-none bi bi-list"></i>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="#" class="" :class="{ active: $route.path == '/' }"><i class="bi bi-house navicon"></i><span> <router-link class="nav-link"  to="/">Home</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/about' }"><i class="bi bi-person navicon" ></i><span> <router-link class="nav-link"  to="/about">About</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/resume' }"><i class="bi bi-file-earmark-text navicon" ></i><span> <router-link class="nav-link"  to="/resume">Resume</router-link></span></a></li>
    <!-- <li><a href="#" :class="{ active: $route.path == '/' }"><i class="bi bi-images navicon" ></i><span>Portfolio</span></a></li> -->
    <li><a href="#" :class="{ active: $route.path == '/service' }"><i class="bi bi-hdd-stack navicon" ></i><span> <router-link class="nav-link"  to="/service">Service</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/contact' }"><i class="bi bi-envelope navicon" ></i><span> <router-link class="nav-link"  to="/contact">Contact</router-link></span></a></li>
  </ul>
</nav>

</header>
</template>