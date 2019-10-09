<template>
  <header class="header">
    <div class="header__logo">
      <img
        src="../assets/logo-header.svg"
        alt="Логотип вест банк"
      >
    </div>
    <div class="header__nav">
      <div class="header__top">
        <p>ООО РНКО “ВЕСТ”</p>
        <p>+7 (495) 215 57 74</p>
      </div>
      <div class="header__content">
        <div class="nav">
          <nav class="nav__inner">
            <router-link to="news" class="nav__item">Новости</router-link>
            <router-link to="about" class="nav__item">Частным<br>клиентам</router-link>
            <router-link to="about" class="nav__item">Бизнесу</router-link>
            <router-link to="about" class="nav__item">Финансовым<br>институтам</router-link>
            <router-link to="about" class="nav__item">О банке</router-link>
          </nav>
          <hr class="nav__line">
        </div>
        <div class="auth">
          <router-link to="signup" class="auth__login_false">
            <img
              class="auth__logo"
              src="../assets/auth-link.svg"
              alt="Иконка входа в веб-банк"
            >
            <span class="auth__text">Войти в веб-банк</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 180px;

  display: flex;
  justify-content: space-between;

  color: white;
  box-sizing: border-box;

  &__logo {
    padding: 9px 25px 0 14px;
  }

  &__nav {
    width: 100%;
    max-width: 1227px;

    display: flex;
    flex-direction: column;

    padding: 31px 0 0 0;
    font-size: 24px;
    line-height: 28px;

    &:before {
      content: '';
      display: inline-block;
      width: 10%;
      min-width: 100px;
      max-width: 200px;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;

    padding-bottom: 0;
    padding-right: 60.66px;
  }

  &__content {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.nav {
  display: inline-block;
  width: 100%;

  padding-right: 30px;
  
  &__inner {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__line {
    margin: 0;
    border: 2px solid $color-light;
  }

  &__item {
    color: white;
    text-decoration: none;
    padding-bottom: 37px;

    &:hover {
      color: $color-main-light;
    }
  }
}

.router-link-exact-active {
  color: $color-main-light;
}

.auth {
  width: 274px;
  height: 90px;

  display: flex;

  background: $color-main;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  
  &__login_false {
    width: 274px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    letter-spacing: 0.05em;
    color: white;
    text-decoration: none;
  }

  &__logo {
    padding-right: 13px;
    width: 35px;
  }
}

h1 {
  margin: 0;
}

p {
  margin: 0;
}

@media (max-width: 1200px) {
  .auth {
    width: 180px;

    &__logo {
      padding-left: 10px;
      padding-right: 0px;
    }
  }
}
</style>
