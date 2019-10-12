<template>
  <div class="profile">
    <div class="profile__info">
      <div class="profile__img">
        <img
          v-if="!profile.photo"
          src="../assets/profile-photo.svg"
          alt="Иконка вместо фотографии пользователя"
        />
        <img
          v-else
          src="../assets/profile-photo.svg"
          alt="Иконка вместо фотографии пользователя 2"
        />
        <button
          class="profile__edit-photo"
          @click="editPhoto"
        >
          Изменить
        </button>
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
    <div class="profile__buttons">
      <button
        class="button profile__edit-data"
        @click="editData"
      >
        Редактировать данные
      </button>
      <button
        class="button profile__logout"
        @click="logout"
      >
        Выйти из аккаунта
      </button>
    </div>
    <Footer class="profile__footer" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {
    Footer: () => import("@/components/Footer.vue"),
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
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  height: 62px;
  width: calc((100vw - 1440px) / 2 + 1166px);

  padding-left: calc((100vw - 1440px) / 2);
  @include color-opacity(background, $color-main, 0.2);
  border: 0;
  user-select: none;

  color: $color-light;
  font-family: Play;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: 0.09em;

  &:hover {
    @include color-opacity(background, $color-main, 0.4);
  }
}

.profile {
  position: relative;

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
    width: calc((100vw - 1440px) / 2 + 1166px);

    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));
    top: 627px;

    .button:nth-child(1) {
      margin-bottom: 50px;
    }
  }

  &__img {
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
    margin-top: 24px;

    color: $color-main;
    font-family: Play;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;

    &:hover {
      @include color-opacity(background, $color-main, 0.6);
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
      font-size: 36px;
      line-height: 42px;
      color: $color-light;

      &:nth-child(1) {
        margin-top: 98px;
      }
    }
  }

  &__footer {
    margin-top: 533px;
  }
}

@media (max-width: 1440px) {
  .profile__buttons {
    left: 0;
  }

  .button {
    width: 1166px;
  }
}
</style>
