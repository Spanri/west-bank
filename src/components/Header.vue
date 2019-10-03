<template>
  <header class="header">
    <div class="header__logo">
      <img src="../assets/logo-header.svg" alt="Логотип вест банк">
    </div>
    <div class="nav-and-other">
      <div class="nav-and-other__first_line">
        <p>ООО РНКО “ВЕСТ”</p>
        <p>+7 (495) 215 57 74</p>
      </div>
      <div class="nav-and-other__second_line">
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
          <router-link to="login" class="auth__login_false">
            <svg class="auth__logo" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 21.16V25H23V1H7V5.8" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/>
              <path d="M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14L1 12ZM17.7071 13.7071C18.0976 13.3166 18.0976 12.6834 17.7071 12.2929L11.3431 5.92893C10.9526 5.53841 10.3195 5.53841 9.92893 5.92893C9.53841 6.31946 9.53841 6.95262 9.92893 7.34315L15.5858 13L9.92893 18.6569C9.53841 19.0474 9.53841 19.6805 9.92893 20.0711C10.3195 20.4616 10.9526 20.4616 11.3431 20.0711L17.7071 13.7071ZM1 14L17 14V12L1 12L1 14Z" fill="#F2F2F2"/>
            </svg>
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
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: white;

  &__logo {
    padding: 9px 25px 0 14px;
  }
}

.nav-and-other {
  width: 100%;
  max-width: 1227px;
  display: flex;
  flex-direction: column;
  padding: 31px 0 0 0;
  font-size: 24px;
  line-height: 28px;

  &:before {
    content: '';
    width: 10%;
    min-width: 100px;
    max-width: 200px;
    display: inline-block;
  }

  &__first_line {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    padding-right: 60.66px;
  }

  &__second_line {
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
}

.nav {
  width: 100%;
  padding-right: 30px;
  display: inline-block;
  
  &__inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  &__line {
    margin: 0;
    border: 2px solid #F2F2F2;
  }

  &__item {
    color: white;
    text-decoration: none;
    padding-bottom: 37px;

    &:hover {
      color: #6DB0FF;
    }
  }
}

.router-link-exact-active {
  color: #6DB0FF;
}

.auth {
  width: 274px;
  height: 90px;
  background: #2D9CDB;
  display: flex;

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
