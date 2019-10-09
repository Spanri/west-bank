<template>
  <nav class="signup3__nav">
    <span
      class="signup3__nav-item"
      :class="[
        signUpPhase == 'SignUp3' ? 'signup3__nav-item_selected' : '',
      ]"
    >
      Онлайн-банк
    </span>
    <span
      class="signup3__nav-item"
      :class="[
        signUpPhase == `SignUp${item}` ? 'signup3__nav-item_selected' : '',
      ]"
    >
      Переводы
    </span>
  </nav>
</template>