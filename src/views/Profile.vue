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
          <div class="button profile__edit-data" @click="editData">
            <p class="profile__buttons-text">Редактировать данные</p>
          </div>
          <div class="button profile__logout" @click="logout">
            <p class="profile__buttons-text">Выйти из аккаунта</p>
          </div>
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
.button {
  height: 62px;
  width: calc((100vw - 1440px) / 2 + 654px);

  @include color-opacity(background, $color-block-light, .2);
  border: 0;
  padding-left: calc((100vw - 1440px) / 2);
  user-select: none;

  color: $color-light;
  font: normal normal normal 24px/28px Play;
  letter-spacing: .09em;

  &:hover {
    @include color-opacity(background, $color-accent, .4);
    cursor: pointer;
  }

}

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
      margin-top: 185px;
      margin-bottom: 100px;
    }

    &-inner {      
      position: absolute;
      left: calc((100vw - 1440px) / 2 * (-1));

      height: 268px;
      width: calc((100vw - 1440px) / 2 + 654px);
    }

    &-text {
      padding: 15px 0 0 42px;
      text-align: left;
    }

    .button + .button {
      margin-top: 78px;
    }

  }

  &__photo-block {
    display: flex;
    align-items: center;
    flex-direction: column;

    color: $color-light;

    margin: 0 72px 0 44px;
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

    &-item {
      margin: 88px 0 0;

      font: 24px/28px Play;
      color: $color-light;

      &:first-child {
        margin-top: 98px;
      }

    }

  }
  
}

@media (max-width: 1440px) {

  .button {
    width: 654px;
  }

  .profile__buttons-inner {
    left: 0;
  }

}
</style>
