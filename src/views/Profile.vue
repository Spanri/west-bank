<template>
  <div class="profile">
    <div class="profile__info">
      <div class="profile__photo-block">
        <ProfilePhoto class="profile__not-photo" v-if="!profile.photo"/>
        <ProfilePhoto class="profile__photo" v-else/>
        <div class="profile__edit-photo" @click="editPhoto">
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
    <div class="profile__buttons">
      <div class="button profile__edit-data" @click="editData">
        <p class="profile__buttons-text">Редактировать данные</p>
      </div>
      <div class="button profile__logout" @click="logout">
        <p class="profile__buttons-text">Выйти из аккаунта</p>
      </div>
    </div>
    <Footer class="profile__footer" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  components: {
    ProfilePhoto: () => import("@/icons/ProfilePhoto.vue"),
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
    position: absolute;
    left: calc((100vw - 1440px) / 2 * (-1));
    top: 627px;

    &-text {
      padding-top: 15px;
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

    &:hover {
      cursor: pointer;
      @include color-opacity(color, $color-accent, 0.6);
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
    width: 654px;
  }
}
</style>
