<script setup>
import Events from './Events.vue'
</script>

<!-- TODO: Растянуть по всему экрану, чтобы было по центру инфа, подчистить по возможности стили -->

<template>
  <div class="body">
    <main>
      <div class="screenWithBack">
        <div class="firstScreen">
          <div class="slogan__1">Добро пожаловать в единое волонтерское движение!</div>
          <div class="slogan__2">Творить добро и делать мир лучше!</div>
          <div class="btn__con">
            <a class="btn__vol" @click="$router.push('/register')">Волонтер</a>
            <a class="btn__org" @click="$router.push('/register/organization')">Организация</a>
          </div>
        </div>
      </div>
      <Events />
      <div class="secondScreen">
        <a class="event__btn" @click="$router.push('/events')">Посмотреть все</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.body {
  width: 80vw;
  margin: 0;
  margin-top: 100px;
  font-family: sans-serif;
  background-color: #f0f8ff;
}

header a {
  text-decoration: none; /* Убираем подчеркивание ссылки */
  color: #333333;
}

.menu__item {
  margin-right: 50px;
}

.btn__con {
  display: flex;
  align-items: center;
}

.head__logIn {
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 5% 10%; /* Отступы изнутри */
  margin-left: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.head__logIn:hover,
.event__btn:hover {
  background-color: #ff4081;
  color: white;
}

.head__signIn:hover,
.menu__item:hover {
  color: #ff4081;
}

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for main&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */

.screenWithBack {
  width: 100vw;
  background-image: url('/header-background.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.firstScreen {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 5% 10%;
  margin: -15px 0 2% 0;
}

.slogan__1 {
  font-size: 60px;
  font-weight: 700;
  width: 70%;
}

.slogan__2 {
  font-size: 32px;
  color: #333333;
  margin: 2% 0 3% 0;
}

.btn__vol,
.btn__org {
  border-radius: 10px;
  padding: 1% 2%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #00829b;
  text-decoration: none;
  margin-right: 25px;
}

.btn__vol,
.btn__org:hover {
  background-color: #00829b;
  color: white;
}

.btn__org,
.btn__vol:hover {
  background-color: white;
  color: #00829b;
}

.sc__title {
  text-align: center;
}

.secondScreen {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  /* justify-items: center; */
  flex-direction: column;
}

.secondScreen a {
  text-decoration: none;
  color: black;
  width: auto;
  max-width: 100%;
}

.event__con {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Чтобы те блоки, которые не влезают в строку, опускались вниз */
  margin: 2% 0 3% 0;
}

.event__block {
  width: 100%;
  display: grid;
  padding: 3%;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 10%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.event__block img {
  width: 100%;
  border-radius: 20px;
}

.info__title {
  font-size: 24px;
  line-height: 30px; /* Межстрочный интервал */
  font-weight: 600;
  margin: 5% 0;
}

.event__date {
  display: flex;
  margin-top: 5%;
}

.info__time {
  margin-left: 50px;
}

.event__btn {
  width: 10%;
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 1%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 5%;
}

/* &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for footer-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
</style>
