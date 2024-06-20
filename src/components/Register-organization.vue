<script>
import axios from 'axios';
import { ApiAddress } from '@/common.ts';

export default {
  name: 'new-account-organization',
  data() {
    return {
      model: {
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        legalAddress: ''
      }
    }
  },
  methods: {
    async createAccount() {
      try {
        const response = await axios.post(ApiAddress + 'api/register-organization', {
          name: this.model.name,
          lastName: this.model.lastName,
          email: this.model.email,
          password: this.model.password,
          phoneNumber: this.model.phoneNumber,
          legalAddress: this.model.legalAddress
        })

        // Успешный ответ
        localStorage.removeItem('accessToken')
        this.$toast.add({severity: 'success', summary: 'Успех', detail: 'Вы успешно зарегистрировались', life: 3000})
        console.log(response.data)
      } catch (error) {
        // Ошибка запроса
        if (error.response) {
          // Сервер вернул ответ с ошибкой
          console.error('Response error:', error.response.data)
          this.$toast.add({severity: 'error', summary: 'Ошибка', detail: error.response.data.message || 'Не удалось создать аккаунт', life: 3000})
        } else {
          // Ошибка сети или другая ошибка
          console.error('Network error:', error.message)
          this.$toast.add({severity: 'error', summary: 'Ошибка', detail: 'Ошибка сети, попробуйте еще раз', life: 3000})
        }
      }
    }
  }
}
</script>


<template>
  <div class="registration-for">
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
            <button class="button">Войти</button>
          </div>
          <button class="sign-up" type="button">Регистрация волонтера</button>
        </div>
      </div>
    </div>
    <div class="row no-gutters w-100 h-100">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="form-container">
          <div class="reg-title-o">
              <div class="heading">Регистрация организатора</div>
          </div>
            <form @submit.prevent="createAccount" class="reg-form-o">
              <div class="inputs">
                  <div class="div">
                    <div class="text-wrapper">Название организации</div>
                    <input
                      class="form-control"
                      type="text"
                      v-model="model.name"
                    >
                  </div>
                  <div class="div">
                    <div class="text-wrapper">Юридический адрес</div>
                    <input
                      class="form-control"
                      type="text"
                      v-model="model.legalAddress"
                    >
                  </div>
                  <div class="div">
                    <div class="text-wrapper">Электронная почта</div>
                    <input
                      class="form-control"
                      type="email"
                      v-model="model.email"
                    >
                  </div>
                  <div class="div">
                    <div class="text-wrapper">Телефон</div>
                    <input
                      class="form-control"
                      type="tel"
                      v-model="model.phoneNumber"
                    >
                  </div>
                <div class="div">
                  <div class="text-wrapper">Пароль</div>
                  <input
                    class="form-control"
                    type="password"
                    v-model="model.password"
                  >
                </div>
              </div>
              <button class="end-reg-button-o" type="submit">Зарегистрировать организацию</button>
          </form>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="image-container">
          <img alt="org-reg-picture.png" src="/org-reg-picture.png" />
        </div>
      </div>
    </div>
  </div>
</template>


<style>
.registration-for {
  align-items: flex-start;
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 90px 64px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.registration-for .inputs {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 650px;
  margin-bottom: 24px;
}

.registration-for .div {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.registration-for .reg-title-o {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  margin-bottom: 34px;
}

.registration-for .heading {
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
  width: 650px;
}

.registration-for .text-wrapper {
  align-self: stretch;
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 0;
  position: relative;
  text-align: left;
}

.registration-for .end-reg-button-o {
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
  color: #F5F5F5;font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.image-container img
{
  width: 100%;
  height: 700px;
  object-fit: contain;
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

</style>
