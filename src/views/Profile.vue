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
    <div class="profile__buttons button-left-wrapper">
      <button class="button-left">
        <div class="button-left-inner" @click="editData">
          <span class="button-left-text">Редактировать данные</span>
        </div>
      </button>
      <button class="button-left">
        <div class="button-left-inner" @click="logout">
          <span class="button-left-text">Выйти из аккаунта</span>
        </div>
      </button>
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
        this.$router.push("/auth");
      });
    },
  },
};
</script>

<style scoped lang="scss">
.profile {
  @include button-left;
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

    padding-top: 92px;
  }

  &__buttons {
    margin: 185px 0 100px;

    & > * + * {
      margin-top: 78px;
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
    font: 14px/16px Play, sans-serif;
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
      font: 24px/28px Play, sans-serif;
      color: $color-light;

      &:first-child {
        margin-top: 73px;
      }

    }

  }
  
}

@media (max-width: 800px) {

  .profile__data {
    max-width: 380px;
  }

}
</style>
