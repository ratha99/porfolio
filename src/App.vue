<template>
  
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer></Footer>

  
</template>

<script>
import Header from '@/pages/Header.vue';
import Footer from '@/pages/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>

