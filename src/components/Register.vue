<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: 'new-account',
  setup() {
    return {
      v$: useVuelidate()
    }
  },

  data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        password: '',
        phoneNumber: '',
        birthDate: ''
      }
    }
  },

  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(7) },
      birthDate: { required }
    }
  },

  methods: {
    async createAccount() {
      try {
        let birthDateUTC = new Date(this.model.birthDate).toISOString()
        const response = await axios.post(ApiAddress + 'api/register-volunteer', {
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          email: this.model.email,
          password: this.model.password,
          phoneNumber: this.model.phoneNumber,
          birthDate: birthDateUTC
        })

        // Успешный ответ
        localStorage.removeItem('accessToken')
        this.$toast.add({
          severity: 'success',
          summary: 'Успех',
          detail: 'Вы успешно зарегистрировались',
          life: 3000
        })
        console.log(response.data)
      } catch (error) {
        // Ошибка запроса
        if (error.response) {
          // Сервер вернул ответ с ошибкой
          console.error('Response error:', error.response.data)
          this.$toast.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: error.response.data.message || 'Не удалось создать аккаунт',
            life: 3000
          })
        } else {
          // Ошибка сети или другая ошибка
          console.error('Network error:', error.message)
          this.$toast.add({
            severity: 'error',
            summary: 'Ошибка',
            detail: 'Ошибка сети, попробуйте еще раз',
            life: 3000
          })
        }
      }
    },

    checkForm() {
      console.log('something about you')
    }
  }
}
</script>

<template>
  <div class="registration-for-volunteers">
    <div class="row no-gutters w-100 h-100">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="form-container">
          <div class="reg-title">
            <div class="reg-title-content">
              <div class="heading">Регистрация волонтера</div>
              <p class="text">Начни творить добро прямо сейчас!</p>
            </div>
          </div>
          <form @submit.prevent="createAccount" class="reg-form-v">
            <div class="inputs">
              <div class="div">
                <div class="text-wrapper">Фамилия</div>
                <input class="form-control" type="text" v-model.trim="model.lastName" />
              </div>
              <div class="div">
                <div class="text-wrapper">Имя</div>
                <input class="form-control" type="text" v-model="model.firstName" />
              </div>
              <div class="div">
                <div class="text-wrapper">Дата рождения</div>
                <input class="form-control" type="date" v-model="model.birthDate" />
              </div>
              <div class="div">
                <div class="text-wrapper">Номер телефона</div>
                <input class="form-control" type="tel" v-model="model.phoneNumber" />
              </div>
            </div>
            <div class="div">
              <div class="text-wrapper">Электронная почта</div>
              <input
                class="form-control"
                type="email"
                placeholder="name@example.com"
                v-model="model.email"
              />
            </div>
            <div class="div">
              <div class="text-wrapper">Пароль</div>
              <input class="form-control" type="password" v-model="model.password" />
            </div>
            <button @click="checkForm" class="end-reg-button-v" type="submit">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="image-container">
          <img alt="vol-reg-picture" src="/vol-reg-picture.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.registration-for-volunteers {
  align-items: flex-start;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px 24px;
  margin-top: 80px;
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
  color: #5c5c5c;
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
  background-color: #ff4081;
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
  color: #f5f5f5;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  outline: none;
  border: 0;
}

.image-container img {
  width: 100%;
  height: 700px;
  object-fit: contain;
}
/* 
.navbar {
  align-items: center;
  background-color: #f5f5f5;
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
  background-color: #f5f5f5;
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
  background-color: #f5f5f5;
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
  background-color: #ff4081;
  color: #f5f5f5;
}

.navbar .sign-up {
  align-items: center;
  border: 1px solid;
  border-color: #ff4081;
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
} */
</style>
