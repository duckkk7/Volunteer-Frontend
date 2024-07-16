<template>
  <div class="profile-for-volunteers">
    <b-container fluid class="h-100">
      <b-row no-gutters class="h-100">
        <!-- Левая колонка: Форма -->
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <b-card class="form-container">
            <div class="reg-title">
              <div class="reg-title-content">
                <h2 class="heading">Редактирование профиля</h2>
                <b-form @submit.prevent="updateProfile" class="profile-form">
                  <b-form-group label="Имя:" label-for="firstName">
                    <b-form-input v-model="model.firstName" id="firstName" type="text"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Фамилия:" label-for="lastName">
                    <b-form-input v-model="model.lastName" id="lastName" type="text"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Путь к фото профиля:" label-for="photoPath">
                    <b-form-input v-model="model.photoPath" id="photoPath" type="text"></b-form-input>
                  </b-form-group>
                  <b-form-group label="О себе:" label-for="about">
                    <b-form-textarea v-model="model.about" id="about"></b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Сохранить</b-button>
                </b-form>
              </div>
            </div>
          </b-card>
        </b-col>

        <!-- Правая колонка: Изображение -->
        <b-col md="6" class="d-flex justify-content-center align-items-center">
          <div class="image-container">
            <b-img :src="model.photoPath" alt="Profile picture" class="profile-image"></b-img>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import { ApiAddress } from '@/common.ts';
import Cookies from 'js-cookie';

export default {
  name: 'ProfileEdit',
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
      }
    };
  },
  async created() {
    try {
      const token = Cookies.get('authToken');
      const response = await axios.get(ApiAddress + 'api/volunteer-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Populate the model with the response data
      this.model.commonUserId = response.data.commonUserId;
      this.model.firstName = response.data.firstName;
      this.model.lastName = response.data.lastName;
      this.model.email = response.data.email;
      this.model.photoPath = response.data.photoPath;
      this.model.phoneNumber = response.data.phoneNumber;
      this.model.birthDate = new Date(response.data.birthDate);
      this.model.about = response.data.about;
      this.model.participationCount = response.data.participationCount;
    } catch (error) {
      console.error('Error fetching profile:', error);
      this.$toast.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: 'Не удалось загрузить профиль',
        life: 3000
      });
    }
  },
  methods: {
    async updateProfile() {
      try {
        const token = Cookies.get('authToken');
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
        );


        this.$router.push('/volunteer-profile');
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  }
};
</script>

<style scoped>
.profile-for-volunteers {
  background-color: #f5f5f5;
  padding: 10px 24px;
  margin-top: 80px;
  height: 100vh;
  width: 100%;
}

.reg-title {
  width: 100%;
  max-width: 600px;
}

.reg-title-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.heading {
  color: #333;
  font-family: 'Arial', sans-serif;
  font-size: 36px;
  font-weight: bold;
}

.form-container {
  width: 100%;
}

.image-container {
  text-align: center;
}

.profile-image {
  width: 80%;
  max-height: 700px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Кастомные стили для инпутов и текстовой области */

.profile-form .form-control {
  width: 100%;
  max-width: calc(100% * 2);
}

.profile-form .form-control.textarea {
  height: calc(100% * 3);
}
</style>

