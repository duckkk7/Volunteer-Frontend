<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import Cookies from 'js-cookie'

export default {
  name: 'profile-id',
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
      },
      invitations: [],
      subscriptions: []
    }
  },
  async created() {
    await this.fetchVolunteerProfile()
  },
  methods: {
    async fetchVolunteerProfile() {
      try {
        const token = Cookies.get('authToken')
        const response = await axios.get(
          ApiAddress + `api/volunteer-profile/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

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
    async inviteVolunteer() {
      try {
        const token = Cookies.get('authToken')
        const response = await axios.post(
          ApiAddress + `api/Invitation/CreateInvitation`,
          {
            volunteerId: this.$route.params.id
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
        alert('Вы успешно пригласили волонтера')
      } catch (error) {
        console.error('Error inviting volunteer:', error)
      }
    }
  }
}
</script>
<template>
  <div class="profile-for-volunteers">
    <div class="profile-container">
      <!-- Блок с фотографией слева -->
      <div class="profile-image">
        <img alt="Profile picture" :src="model.photoPath || '/profile-default.png'" />
      </div>

      <!-- Блок с информацией справа -->
      <div class="profile-content">
        <h1>{{ model.lastName }} {{ model.firstName }}</h1>
        <p class="about-text" v-show="model.about">{{ model.about }}</p>
        <p class="detail-text">Дата рождения: {{ model.birthDate }}</p>
        <p class="detail-text">Количество часов: {{ model.participationCount }}</p>
        <button @click="inviteVolunteer()">Пригласить волонтера в организацию</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-for-volunteers {
  background-color: #ffd1b0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
}

.profile-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}

.profile-image img {
  max-width: 100%;
  height: auto;
}

.profile-content {
  flex: 2;
  padding: 40px;
  max-width: 1000px;
}

.profile-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.profile-content p {
  font-size: 1rem;
  margin-bottom: 10px;
}

.about-text {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.edit-btn {
  display: inline-block;
  background-color: #ff6f61;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 30px;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

.invitations,
.subscriptions {
  margin-bottom: 20px;
}

.invitations h2,
.subscriptions h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

button {
  background-color: #ff6f61;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4a3d;
}
</style>
