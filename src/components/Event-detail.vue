<script setup>

</script>

<template>
  <div class="event-detail-page px-4">
    <div class="navbar">
      <div class="content">
        <div class="navigation">
          <div class="button">О нас</div>
          <div class="button">Волонтерам</div>
          <div class="button">Мероприятия</div>
          <div class="more">
            <div class="button">Еще
              <img class="chevron-down" alt="Chevron down" src="/chevrondown1046-9o3i.svg" />
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="log-in">
            <button class="button" @click="$router.push('/login')">Войти</button>
          </div>
          <button class="sign-up" type="button" @click="$router.push('/register')">Регистрация волонтера</button>
        </div>
      </div>
    </div>
    <div class="row gx-5 w-100 h-100">
      <div class="col-md-7 d-flex justify-content-end">
        <div class="form">
          <div class="section-title">
            <div class="content">
              <div class="heading">Название</div>
            </div>
          </div>
          <div class="inputs">
            <div class="text-wrapper">Основная информация</div>
            <div class="input">
              <div class="div">Организатор:</div>
              <div class="div">Город: </div>
              <div class="div">Дата и время: </div>
            </div>
          </div>
          <div class="inputs-2">
            <div class="text-wrapper">Описание</div>
            <div class="div-wrapper">
              <div class="div">Текст</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-start">
        <div class="card">
          <img src="/event-picture.jpg" alt="event-picture" class="placeholder-image" />
          <button class="rose-button">Записаться</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="newsletter">
          <div class="content">
            <div class="join-our-newsletter">Подпишитесь на наши обновления</div>
            <p class="">Чтобы оставаться в курсе последних событий</p>
          </div>
          <div class="actions">
            <div class="type-default">
              <div class="placeholder">Введите email</div>
            </div>
          </div>
        </div>
        <div class="by-sub-wr">
          <p class="by-sub">Нажимая кнопку подписаться вы даете согласие на обработку ваших персональных данных</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-detail-page {
  align-items: center;
  background-color: #EBEBEB;
  display: grid;
  gap: 34px;
  padding: 150px 64px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

.event-detail-page .form {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 34px;
  height: 500px;
  width: 80%;
  position: relative;
  margin-top: 44px;
  margin-left: 24px;
}

.event-detail-page .section-title {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 643px;
}

.event-detail-page .content {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
}

.event-detail-page .heading {
  align-self: stretch;
  color: #333333;
  font-family: sans-serif;
  font-size: 34px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 0;
  position: relative;
  text-align: center;
}

.event-detail-page .inputs {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 10px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 14px;
  position: relative;
  width: 100%;
}

.event-detail-page .text-wrapper {
  color: #333333;
  font-family: sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.event-detail-page .input {
  align-items: flex-start;
  align-self: stretch;
  background-color: #F5F5F5;
  border-radius: 20px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 14px;
  position: relative;
  width: 100%;
}

.event-detail-page .div {
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.event-detail-page .inputs-2 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 246px;
  margin-bottom: -2px;
  position: relative;
  width: 100%;
}

.event-detail-page .div-wrapper {
  align-items: flex-start;
  align-self: stretch;
  background-color: #F5F5F5;
  border-radius: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 14px;
  position: relative;
  width: 100%;
  height: 100%;
}

.event-detail-page .card {
  align-items: center;
  background-color: #F5F5F5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 500px;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 380px;
  border: 0;
  margin-top: 44px;
}

.event-detail-page .placeholder-image {
  align-self: stretch;
  height: 300px;
  object-fit: cover;
  position: relative;
  width: 100%;
  border-radius: 20px;
}

.event-detail-page .rose-button {
  align-items: center;
  align-self: stretch;
  background-color: #FF4081;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 4px 4px #00000040;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  overflow: hidden;
  padding: 12px 24px;
  position: relative;
  width: 100%;
  color: #F5F5F5;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.navbar {
  align-items: center;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navbar .content {
  align-items: center;
  align-self: stretch;
  background-color: #F5F5F5;
  box-shadow: 0 4px 4px #00000040;
  display: flex;
  height: 72px;
  flex-direction: row;
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
  cursor: pointer;
}

.navbar .sign-up:hover {
  background-color: #FF4081;
  color: #F5F5F5;
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
  font-size: 18px;
  font-family: sans-serif;
}

.footer {
  background-color: #ffffff33;
  background-image: url("/footer-background.svg");
  background-position: 50% 50%;
  background-size: cover;
  padding: 80px 0;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
}

.footer .container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.footer .newsletter {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 200px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.footer .content {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 500px;
}

.footer .actions {
  align-items: center;
  display: flex;
  flex: 1;
  gap: 16px;
  justify-content: flex-end;
  position: relative;
}

.footer .type-default {
  align-items: center;
  background-color: #F5F5F5;
  border: 1px solid;
  border-color: #FF4081;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding: 12px;
  position: relative;
  width: 402px;
}

.footer .placeholder {
  color: #5C5C5C;
  flex: 1;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
}

.footer .button {
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

.footer .by-sub-wr {
  align-items: center;
  align-self: stretch;
  display: flex;
  gap: 4px;
  height: 51px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
}
.footer .by-sub {
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

</style>