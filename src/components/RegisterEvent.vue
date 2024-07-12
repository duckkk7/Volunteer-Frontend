<template>
  <div class="event-reg-container">
    <!-- <div class="navbar">
      <div class="content">
        <div class="navigation">
          <div class="button">О нас</div>
          <div class="button">Волонтерам</div>
          <div class="button">Мероприятия</div>
          <div class="more">
            <div class="button">
              Еще
              <img class="chevron-down" alt="Chevron down" src="/chevrondown1046-9o3i.svg" />
            </div>
          </div>
        </div>
        <div class="actions">
          <div class="log-in">
            <button class="button" @click="$router.push('/login')">Войти</button>
          </div>
          <button class="sign-up" type="button" @click="$router.push('/register')">
            Регистрация волонтера
          </button>
        </div>
      </div>
    </div> -->
    <div class="row no-gutters w-100 h-100">
      <div class="col-md-3 d-flex flex-row align-items-center">
        <div class="image-container">
          <img src="/event-reg-picture2.png" alt="event-reg-picture2" />
        </div>
      </div>

      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="event-reg-event-registration">
          <div class="event-reg-section-title">
            <div class="heading">Публикация события</div>
            <p class="text">Расскажите о Вашей идее всему миру!</p>
          </div>

          <form @submit.prevent="createEvent" class="event-reg-form">
            <div class="event-reg-input">
              <div class="text-wrapper">Название</div>
              <input class="form-control" type="text" v-model="model.title" />
            </div>

            <div class="event-reg-input">
              <div class="text-wrapper">Город проведения</div>
              <input class="form-control" type="text" v-model="model.city" />
            </div>

            <div class="event-reg-inputs">
              <div class="event-reg-input2">
                <div class="text-wrapper">Дата и время начала</div>
                <input class="form-control" type="datetime-local" v-model="model.startDate" />
              </div>
              <div class="event-reg-input2">
                <div class="text-wrapper">Дата и время завершения</div>
                <input class="form-control" type="datetime-local" v-model="model.endDate" />
              </div>
            </div>

            <div class="event-reg-input">
              <div class="text-wrapper">Описание</div>
              <textarea class="form-control" rows="3" v-model="model.description"></textarea>
            </div>

            <button class="publish-button">Опубликовать</button>
          </form>
        </div>
      </div>

      <div class="col-md-3 d-flex flex-row-reverse align-items-center">
        <div class="image-container">
          <img src="/event-reg-picture1.png" alt="event-reg-picture1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import Cookies from 'js-cookie'

export default {
  name: 'new-event',
  data() {
    return {
      model: {
        title: '',
        startDate: null,
        endDate: null,
        city: '',
        description: ''
      }
    }
  },
  methods: {
    async createEvent() {
      try {
        const token = Cookies.get('authToken')

        // Convert date values to UTC
        const startDateUTC = new Date(this.model.startDate).toISOString()
        const endDateUTC = new Date(this.model.endDate).toISOString()

        const response = await axios.post(
          ApiAddress + 'api/CreateEvent',
          {
            title: this.model.title,
            startDate: startDateUTC,
            endDate: endDateUTC,
            city: this.model.city,
            description: this.model.description
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        // Успешный ответ

        this.$toast.add({
          severity: 'success',
          summary: 'Успех',
          detail: 'Ваше событие успешно зарегистрировано!',
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
            detail: error.response.data.message || 'Не удалось зарегистрировать событие',
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
    }
  }
}
</script>

<style scoped>
.event-reg-container {
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  position: absolute;
  margin-top: 60px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #f5f5f5;
}

.event-reg-event-registration {
  gap: 48px;
  width: 100%;
  display: flex;
  margin-top: 44px;
  overflow: hidden;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.event-reg-section-title {
  gap: 16px;
  width: 768px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.event-reg-section-title .heading {
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

.event-reg-section-title .text {
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

.event-reg-form {
  gap: 34px;
  width: 643px;
  display: flex;
  z-index: 1;
  align-items: center;
  flex-shrink: 0;
  flex-direction: column;
}

.event-reg-form .text-wrapper {
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

.event-reg-form .publish-button {
  align-items: center;
  align-self: stretch;
  background-color: #ff4081;
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
  color: #f5f5f5;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.event-reg-inputs {
  gap: 24px;
  display: flex;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
}
.event-reg-input {
  gap: 8px;
  width: 643px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.event-reg-input2 {
  gap: 8px;
  width: 309.5px;
  display: flex;
  flex-grow: 1;
  align-items: flex-start;
  flex-shrink: 0;
  flex-direction: column;
}

.image-container img {
  width: 500px;
  height: 700px;
  object-fit: contain;
}
</style>
