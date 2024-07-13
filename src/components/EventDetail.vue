<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default {
  name: 'event-detail',
  data() {
    return {
      model: {
        id: '',
        organizationId: '',
        organizationName: '',
        title: '',
        photoPath: null,
        startDate: '',
        endDate: '',
        city: '',
        description: '',
        coverLetter: ''
      },
      applications: [],
      userRole: ''
    }
  },
  async created() {
    await this.fetchEventData()
    this.checkUserRole()
    if (this.userRole === 'Organization') {
      await this.fetchApplications()
    }
  },
  watch: {
    '$route.params.id': 'fetchEventData'
  },
  methods: {
    async fetchEventData() {
      try {
        const token = Cookies.get('authToken')
        const response = await axios.get(`${ApiAddress}api/GetById/${this.$route.params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        this.model.id = response.data.id
        this.model.organizationId = response.data.organizationId
        this.model.organizationName = response.data.organizationName
        this.model.title = response.data.title
        this.model.photoPath = null
        this.model.startDate = new Date(response.data.startDate).toLocaleDateString()
        this.model.endDate = new Date(response.data.endDate).toLocaleDateString()
        this.model.startTime = new Date(response.data.startDate).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
        this.model.endTime = new Date(response.data.endDate).toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
        this.model.city = response.data.city
        this.model.description = response.data.description

        console.log(response.data)
        console.log('this works')
      } catch (error) {
        if (error.response) {
          console.error('Response error:', error.response.data)
          this.showError('Не удалось загрузить данные. ' + error.response.data.message)
        } else {
          console.error('Network error:', error.message)
          this.showError('Ошибка сети. Попробуйте позже.')
        }
      }
    },
    async applyToEvent() {
      try {
        const token = Cookies.get('authToken')
        const response = await axios.post(
          `${ApiAddress}api/Application/Apply?event=${this.$route.params.id}`,
          { coverLetter: this.coverLetter },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        // browser alert message that application was sent
        alert('Заявка отправлена')
      } catch (error) {
        if (error.response) {
          console.error('Response error:', error.response.data)
          this.showError('Не удалось загрузить данные. ' + error.response.data.message)
        } else {
          console.error('Network error:', error.message)
          this.showError('Ошибка сети. Попробуйте позже.')
        }
      }
    },
    async fetchApplications() {
      try {
        const token = Cookies.get('authToken')
        const response = await axios.get(
          `${ApiAddress}api/Application/GetApplicationsByEventId/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        this.applications = response.data
      } catch (error) {
        console.error('Error fetching applications:', error)
      }
    },
    async acceptApplication(applicationId) {
      try {
        const token = Cookies.get('authToken')
        // FIXME: КОГДА ИСПРАВЯТ APLICATION ПОМЕНЯТЬ У СЕБЯ ТОЖЕ ЗДЕСЬ
        await axios.put(
          `${ApiAddress}api/Application/AcceptAplication/${applicationId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        alert('Заявка одобрена')
        await this.fetchApplications()
      } catch (error) {
        console.error('Error accepting application:', error)
      }
    },
    async rejectApplication(applicationId) {
      try {
        const token = Cookies.get('authToken')
        await axios.put(
          `${ApiAddress}api/Application/RejectAplication/${applicationId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        alert('Заявка отклонена')
        await this.fetchApplications()
      } catch (error) {
        console.error('Error rejecting application:', error)
      }
    },
    checkUserRole() {
      const token = Cookies.get('authToken')
      if (token) {
        const decodedToken = jwtDecode(token)
        this.userRole = decodedToken.role
      }
    }
  }
}
</script>

<template>
  <div class="event-detail-page px-4">
    <div class="row gx-5 w-100 h-100">
      <div class="col-md-7 d-flex justify-content-end">
        <div class="form">
          <div class="section-title">
            <div class="content">
              <div class="heading">{{ model.title }}</div>
            </div>
          </div>
          <div class="inputs">
            <div class="text-wrapper">Основная информация</div>
            <div class="input">
              <div class="div">Организатор: {{ model.organizationName }}</div>
              <div class="div">Город: {{ model.city }}</div>
              <div class="div">
                Дата и время: с {{ model.startDate }} {{ model.startTime }} по {{ model.endDate }}
                {{ model.endTime }}
              </div>
            </div>
          </div>
          <div class="inputs-2">
            <div class="text-wrapper">Описание</div>
            <div class="div-wrapper">
              <div class="div">{{ model.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 d-flex justify-content-start">
        <div class="card">
          <img src="/event-picture.jpg" alt="event-picture" class="placeholder-image" />
          <button class="rose-button" @click="applyToEvent">Записаться</button>
          <div class="div-wrapper">
            <!-- <input class="form-control" type="text" v-model="model.firstName" /> -->
            <textarea
              v-model="coverLetter"
              class="form-control"
              cols="30"
              rows="3"
              placeholder="Текст заявки"
            />
          </div>
        </div>
      </div>
      <div v-if="userRole === 'Organization'">
        <div class="heading">Заявки</div>
        <div v-for="application in applications" :key="application.applicationId">
          <p>Название события: {{ application.eventTitle }}</p>
          <p>Имя волонтера: {{ application.volunteerName }}</p>
          <p>Сопроводительное письмо: {{ application.coverLetter }}</p>
          <p>Дата: {{ new Date(application.date).toLocaleDateString() }}</p>
          <p>Статус: {{ application.status }}</p>
          <!-- FIXME: application.id => event.id -->
          <button @click="acceptApplication(application.applicationId)">Принять</button>
          <button @click="rejectApplication(application.applicationId)">Отклонить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.event-detail-page {
  align-items: center;
  background-color: #ebebeb;
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
  background-color: #f5f5f5;
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
  background-color: #f5f5f5;
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
  background-color: #f5f5f5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 600px;
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
</style>
