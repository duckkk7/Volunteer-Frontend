<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import Cookies from 'js-cookie'

export default {
  name: 'profile-edit',
  data() {
    return {
      model: {
        commonUserId: null,
        firstName: '',
        lastName: '',
        photoPath: null,
        birthDate: '',
        about: null,
        participationCount: null,
        email: '',
        phoneNumber: ''
        // applications: null,
        // subscriptions: null
      }
    }
  },
  async created() {
    try {
      const token = Cookies.get('authToken')
      //   TODO: Измени на volunteer-profile когда на бэке исправят
      const response = await axios.get(ApiAddress + 'api/voluteer-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // Populate the model with the response data
      this.model.commonUserId = response.data.commonUserId
      this.model.firstName = response.data.firstName
      this.model.lastName = response.data.lastName
      this.model.email = response.data.email
      this.model.photoPath = response.data.photoPath
      this.model.phoneNumber = response.data.phoneNumber
      this.model.birthDate = new Date(response.data.birthDate).toLocaleDateString()
      this.model.about = response.data.about
      this.model.participationCount = response.data.participationCount
      //   this.model.applications = response.data.applications
      //   this.model.subscriptions = response.data.subscriptions
    } catch (error) {
      console.error('Error fetching profile:', error)
      this.$toast.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Не удалось загрузить профиль',
        life: 3000
      })
    }
  },
  methods: {
    async updateProfile() {
      try {
        const token = Cookies.get('authToken')
        //   TODO: Измени на volunteer-profile когда на бэке исправят
        const response = await axios.put(
          `${ApiAddress}api/update-volunteer?volunteerCommonUserId=${this.model.commonUserId}`,
          {
            firstName: this.model.firstName,
            lastName: this.model.lastName,
            photoPath: this.model.photoPath,
            birthDate: new Date(this.model.birthDate).toISOString(),
            about: this.model.about,
            participationCount: this.model.participationCount
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        this.$router.push('/volunteer-profile')
      } catch (error) {
        console.error('Error updating profile:', error)
      }
    }
  }
}
</script>

<template>
  <div class="profile-for-volunteers">
    <div class="row no-gutters w-100 h-100">
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="form-container">
          <div class="reg-title">
            <div class="reg-tittle-content">
              <div class="heading">Редактирование профиля</div>
              <form @submit.prevent="updateProfile">
                <div>
                  <label for="firstName">First Name:</label>
                  <input v-model="model.firstName" id="firstName" type="text" />
                </div>
                <div>
                  <label for="lastName">Last Name:</label>
                  <input v-model="model.lastName" id="lastName" type="text" />
                </div>
                <div>
                  <label for="photoPath">Photo URL:</label>
                  <input v-model="model.photoPath" id="photoPath" type="text" />
                </div>
                <div>
                  <label for="about">About:</label>
                  <textarea v-model="model.about" id="about"></textarea>
                </div>
                <button type="submit">Сохранить</button>
              </form>
              <!-- <p class="text" v-show="model.about">
                {{ model.about }}
              </p>
              <br />
              <p class="text">Дата рождения: {{ model.birthDate }}</p>
              <p class="text">Электронная почта: {{ model.email }}</p>              
              <p class="text">Количество часов: {{ model.participationCount }}</p>
              <br />
              <a class="event__btn" @click="$router.push('/events')">Редактировать профиль</a> -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center align-items-center">
        <div class="image-container">
          <img alt="Profile picture" :src="model.photoPath" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profile-for-volunteers {
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

.profile-for-volunteers .reg-title {
  align-items: left;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 650px;
}

.profile-for-volunteers .reg-title-content {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 15px;
  position: relative;
}

.profile-for-volunteers .heading {
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
  /* text-align: left; */
}

.profile-for-volunteers .text {
  align-self: stretch;
  margin-top: 20px;
  color: #5c5c5c;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  position: relative;
  /* text-align: center; */
}

.profile-for-volunteers .reg-form-v {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
}

.profile-for-volunteers .inputs {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
  width: 650px;
}

.profile-for-volunteers .div {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
}

.profile-for-volunteers .text-wrapper {
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

.profile-for-volunteers .end-reg-button-v {
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
  width: 80%;
  height: 700px;
  object-fit: contain;
}

.event__btn:hover {
  background-color: #ff4081;
  color: white;
}

.event__btn {
  width: 10%;
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 1%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 5%;
  color: #333333;
}
</style>
