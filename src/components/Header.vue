<template>
      <header id="header" class="header d-flex flex-column justify-content-center">

<i class="header-toggle d-xl-none bi bi-list"></i>

<nav id="navmenu" class="navmenu">
  <ul>
    <li><a href="#" class="" :class="{ active: $route.path == '/' }"><i class="bi bi-house navicon"></i><span> <router-link class="nav-link"  to="/"> {{ $t("home") }}</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/about' }"><i class="bi bi-person navicon" ></i><span> <router-link class="nav-link"  to="/about"> {{ $t("about") }}</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/resume' }"><i class="bi bi-file-earmark-text navicon" ></i><span> <router-link class="nav-link"  to="/resume">{{ $t("resume") }}</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/blog' }"><i class="bi bi-book navicon" ></i><span><router-link class="nav-link"  to="/blog">{{ $t("blog") }}</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/service' }"><i class="bi bi-hdd-stack navicon" ></i><span> <router-link class="nav-link"  to="/service">{{ $t("services") }}</router-link></span></a></li>
    <li><a href="#" :class="{ active: $route.path == '/contact' }"><i class="bi bi-envelope navicon" ></i><span> <router-link class="nav-link"  to="/contact">{{ $t("contact") }}</router-link></span></a></li>
    <li><a   @click="changeLanguage" ><i class="bi bi-translate navicon" ></i><span> {{ $t("lang") }}</span></a></li>
  </ul>
</nav>
</header>
</template>
<script>
export default {
  methods: {
    changeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        localStorage.setItem("lang","khm")
      } else {
        this.$i18n.locale = "en";
        localStorage.setItem("lang","en")
      }
      location.reload();
    },
  },
};
</script>