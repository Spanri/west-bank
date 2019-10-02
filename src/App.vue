<template>
  <div id="app">
    <div id="app-inner">
      <Header />
      <main class="main">
        <router-view/>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Play&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #090909;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  overflow: hidden;

  &-inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
  }
}

.main {
  flex: 2 0px;
}
</style>
