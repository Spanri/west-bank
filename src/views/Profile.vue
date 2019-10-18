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

  padding-left: calc((100vw - 1440px) / 2);
  @include color-opacity(background, $color-block-light, 0.2);
  border: 0;
  user-select: none;

  color: $color-light;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.09em;

  &:hover {
    cursor: pointer;
    @include color-opacity(background, $color-accent, 0.4);
  }
}

.profile {
  position: relative;

  &__content {
    position: relative;
  }

  &__info {
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: flex-start;
    align-items: stretch;

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

      width: calc((100vw - 1440px) / 2 + 654px);
      height: 268px;
    }

    &-text {
      padding-top: 15px;
      padding-left: 42px;
      text-align: left;
    }

    .button + .button {
      margin-top: 78px;
    }
  }

  &__photo-block {
    display: flex;
    flex-direction: column;
    align-items: center;

    color: white;

    margin-left: 44px;
    margin-right: 72px;
  }

  &__edit-photo {
    border: 0;
    background: transparent;
    padding: 24px 10px;

    color: $color-accent;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    &::after {
      display: block;
      content: attr(title);
      font-weight: bold;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }

    &:hover {
      cursor: pointer;
      color: $color-light;
      font-weight: bold;
    }
  }

  &__data {
    text-align: left;

    &-item {
      margin: 0;
      margin-top: 88px;

      font-family: Play;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
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
