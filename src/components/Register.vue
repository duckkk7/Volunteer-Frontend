<script>
//import Navbar from "@/components/Navbar.vue";
import axios from "axios";
import {ApiAddress} from "@/common.ts";

export default {
  data() {
      return {
        model: {
          firstName: "",
          lastName: "",
          middleName: "",
          email: "",
          password: "",
          phoneNumber: "",
          birthDate: ""
        }
      }
    },
    methods: {
      async createAccount() {
      },
    },
    name: "new-account",
};
</script>


<template>
  <div class="registration-for-volunteers">
    <div class="row">
      <div class="col-md-6 order-md-1">
        <div class="reg-title">
          <div class="reg-title-content">
            <div class="heading">Регистрация волонтера</div>
            <p class="text">Начни творить добро прямо сейчас!</p>
            <p> </p>
          </div>
        </div>
        <form class="reg-form-v">
          <div class="inputs">
            <div class="div">
              <div class="text-wrapper">Фамилия</div>
              <input
                class="form-control"
                type="text"
                v-model = model.lastName
              >
            </div>
            <div class="div">
              <div class="text-wrapper">Имя</div>
              <input
                class="form-control"
                type="text"
                v-model = model.firstName
              >
            </div>
            <div class="div">
              <div class="text-wrapper">Дата рождения</div>
              <input
                class="form-control"
                type="date"
                v-model = model.birthDate
              >
            </div>
            <div class="div">
              <div class="text-wrapper">Номер телефона</div>
              <input
                class="form-control"
                type="tel"
                v-model = model.phoneNumber
              >
            </div>
          </div>
          <div class="div">
            <div class="text-wrapper">Электронная почта</div>
            <input
              class="form-control"
              type="email"
              placeholder="name@example.com"
              v-model = model.email
            >
          </div>
          <div class="div">
            <div class="text-wrapper">Пароль</div>
            <input
              class="form-control"
              type="text"
              v-model = model.password
            >
          </div>
          <div class="div">
            <div class="text-wrapper">Повторите пароль</div>
            <input
              class="form-control"
              type="text"
              v-model = model.password
            >
          </div>
          <button class="end-reg-button-v" @click="createAccount">Зарегистрироваться</button>
        </form>
      </div>
      <div class="col-md-6 order-md-2 d-flex align-items-center">
        <div class="image-container">
          <img alt="vol-reg-picture" src="/vol-reg-picture.png"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.registration-for-volunteers {
  align-items: flex-start;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px 24px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.registration-for-volunteers .reg-title {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 650px;
}

.registration-for-volunteers .reg-title-content {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 15px;
  position: relative;
  top:30px;
}

.registration-for-volunteers .heading {
  align-self: stretch;
  color: #333333;
  font-family: sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 0;
  position: relative;
  text-align: center;
}

.registration-for-volunteers .text {
  align-self: stretch;
  color: #5C5C5C;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  position: relative;
  text-align: center;
}

.registration-for-volunteers .reg-form-v {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.registration-for-volunteers .inputs {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 650px;
}

.registration-for-volunteers .div {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
}

.registration-for-volunteers .text-wrapper {
  align-self: stretch;
  color: #333333;
  font-family: sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-top: -1px;
  position: relative;
}

.registration-for-volunteers .end-reg-button-v {
  align-items: center;
  align-self: stretch;
  background-color: #FF4081;
  border-radius: 10px;
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
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  outline: none;
  border: 0;
}

.image-container img
{
  width: 100%;
  height: 700px;
  object-fit: contain;
}
</style>
