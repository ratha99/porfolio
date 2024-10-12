<template>
  <header id="header" class="header d-flex flex-column justify-content-center ">
    <i class="header-toggle d-xl-none bi bi-list"></i>
    <nav id="navmenu" class="navmenu">
      <ul>
        <li><router-link class="nav-link" :class="{ active: $route.path == '/' }" to="/"><i
              class="bi bi-house navicon"></i><span> {{ $t("home") }}</span></router-link></li>
        <li><router-link class="nav-link" :class="{ active: $route.path == '/about' }" to="/about"><i
              class="bi bi-person navicon"></i><span> {{ $t("about") }}</span></router-link></li>
        <li> <router-link class="nav-link" :class="{ active: $route.path == '/resume' }" to="/resume"><i
              class="bi bi-file-earmark-text navicon"></i><span>{{ $t("resume") }}</span></router-link></li>
        <li><router-link class="nav-link" :class="{ active: $route.path == '/blog' }" to="/blog"><i
              class="bi bi-book navicon"></i><span>{{ $t("blog") }}</span></router-link></li>
        <li><router-link class="nav-link" :class="{ active: $route.path == '/service' }" to="/service"><i
              class="bi bi-hdd-stack navicon"></i><span> {{ $t("services") }}</span></router-link></li>
        <li><router-link class="nav-link" :class="{ active: $route.path == '/contact' }" to="/contact"><i
              class="bi bi-envelope navicon"></i><span> {{ $t("contact") }}</span></router-link></li>
        <li><a @click="changeLanguage"><i class="bi bi-translate navicon"></i><span> {{ $t("lang") }}</span></a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
import useBlogStore from "@/stores/blog.js";
import i18n from '@/i18n/index.js'

export default {
  methods: {
    changeLanguage() {
      const postStore = useBlogStore();
      const newLang = i18n.global.locale === "en" ? "khm" : "en";
      const savedLang = localStorage.setItem("lang", "khm");

      if (i18n.locale == "en") {
        this.updateLanguage(savedLang, postStore);
      } else {
        this.updateLanguage(newLang, postStore);
      }
      // location.reload();
    },
    updateLanguage(lang, store) {
      i18n.global.locale = lang; // Change the locale in i18n
      store.setLanguage(lang); // Update language in store and fetch posts
    },
  },
};
</script>