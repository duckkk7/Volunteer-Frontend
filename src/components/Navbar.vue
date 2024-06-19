<template>
  <div class="navbar">
    <div class="content">
      <div class="navigation">
        <div class="text-wrapper">О нас</div>
        <div class="text-wrapper">Волонтерам</div>
        <div class="text-wrapper">Мероприятия</div>
        <div class="more">
          <div class="text-wrapper">Еще</div>
          <img class="chevron-down" alt="Chevron down" src="" />
        </div>
      </div>
      <div class="actions">
        <div class="log-in">
          <button class="button">Войти</button>
        </div>
        <div class="sign-up">
          <button class="button">Регистрация организатора</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  align-items: center;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.navbar .content {
  align-items: center;
  align-self: stretch;
  background-color: #F5F5F5;
  box-shadow: 0 4px 4px #00000040;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 0 64px;
  position: relative;
  width: 100%;
}

.navbar .navigation {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
}

.navbar .text-wrapper {
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 0;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.navbar .more {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  position: relative;
}

.navbar .chevron-down {
  height: 24px;
  position: relative;
  width: 24px;
}

.navbar .actions {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: flex-end;
  padding: 0 5px;
  position: relative;
}

.navbar .log-in {
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 10px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  padding: 8px 20px;
  position: relative;
}

.navbar .button {
  all: unset;
  box-sizing: border-box;
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 27px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.navbar .sign-up {
  align-items: center;
  border: 1px solid;
  border-color: #FF4081;
  border-radius: 10px;
  box-shadow: 0 4px 4px #00000040;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  margin-bottom: 0;
  margin-right: 0;
  margin-top: 0;
  overflow: hidden;
  padding: 8px 20px;
  position: relative;
}
</style>
