<template>
  <div class="profile">
    <div class="profile__info">
      <div class="profile__photo-block">
        <ProfilePhoto class="profile__not-photo" v-if="!profile.photo"/>
        <ProfilePhoto class="profile__photo" v-else/>
        <div 
          class="profile__edit-photo" 
          @click="editPhoto"
          title="Изменить"
        >
          <span>Изменить</span>
        </div>
      </div>
      <div class="profile__data">
        <p class="profile__data-item">
          {{
            profile.lastName +
              " " +
              profile.firstName +
              " " +
              profile.patronymic
          }}
        </p>
        <p class="profile__data-item">{{ profile.phone }}</p>
        <p class="profile__data-item">{{ profile.email }}</p>
      </div>
    </div>
    <div class="profile__buttons-wrapper">
      <div class="profile__buttons">
        <div class="profile__buttons-inner">
          <p class="profile__buttons-text" @click="editData">
            Редактировать данные
          </p>
        </div>
        <div class="profile__buttons-inner">
          <p class="profile__buttons-text" @click="logout">
            Выйти из аккаунта
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {
    ProfilePhoto: () => import("@/icons/ProfilePhoto.vue"),
  },
  computed: {
    profile() {
      let user = this.$store.getters.getUser;
      return user.profile;
    },
  },
  methods: {
    editPhoto() {},
    editData() {},
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/signup");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.profile {
  position: relative;

  &__content {
    position: relative;
  }

  &__info {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: flex-start;

    width: 100%;

    margin-top: 92px;
  }

  &__buttons {
    height: 268px;

    &-wrapper {
      position: relative;
      margin: 185px 0 100px;
    }

    &-inner {      
      position: absolute;
      left: calc((100vw - 1440px) / 2 * (-1));

      height: 62px;
      width: calc((100vw - 1440px) / 2 + 654px);

      @include color-opacity(background, $color-block-light, .2);
      background: 
        linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
        rgba(red($color-block-light), 
          green($color-block-light), 
          blue($color-block-light), 
          .2); 
      border: 0;
      padding-left: calc((100vw - 1440px) / 2);
      user-select: none;

      color: $color-light;
      font: normal normal normal 24px/28px Play;
      letter-spacing: .09em;

      &:hover {
        background: $color-accent;
        background: 
          linear-gradient(90deg, #15172D -20.71%, rgba(61, 65, 104, 0) 100%),
          $color-accent; 
        cursor: pointer;
      }
      
    }

    &-inner + &-inner {
      margin-top: 168px; // 90px (1ый блок) + 78px
    }

    &-text {
      margin: 0;
      padding: 15px 0 15px 42px;
      text-align: left;
    }

  }

  &__photo-block {
    display: flex;
    align-items: center;
    flex-direction: column;

    color: $color-light;

    margin: 45px 52px 0 42px;
  }

  &__edit-photo {
    background: transparent;
    border: 0;
    padding: 24px 10px;

    color: $color-accent;
    font: 14px/16px Play;
    text-align: right;

    &::after {
      content: attr(title);
      overflow: hidden;
      visibility: hidden;

      display: block;
      
      font-weight: bold;
      
      height: 0;
    }

    &:hover {
      color: $color-light;
      cursor: pointer;
      font-weight: bold;
    }

  }

  &__data {
    text-align: left;

    &-item + &-item {
      margin: 111px 0 0;
    }

    &-item {
      font: 24px/28px Play;
      color: $color-light;

      &:first-child {
        margin-top: 73px;
      }

    }

  }
  
}

@media (max-width: 1440px) {
  
  .profile__buttons-inner {
    width: 654px;
    left: 0;
  }

}
</style>
