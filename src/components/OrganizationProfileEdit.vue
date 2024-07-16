<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'
import Cookies from 'js-cookie'

export default {
  name: 'org-profile-edit',
  data() {
    return {
      model: {
        id: null,
        commonUserId: '',
        name: '',
        photoPath: null,
        legalAddress: '',
        website: '',
        workingHours: '',
        commonUser: null
      }
    }
  },
  async created() {
    try {
      const token = Cookies.get('authToken')
      const response = await axios.get(ApiAddress + 'api/organization-profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      // Populate the model with the response data
      this.model.id = response.data.id
      this.model.commonUserId = response.data.commonUserId
      this.model.name = response.data.name
      this.model.photoPath = response.data.photoPath
      this.model.legalAddress = response.data.legalAddress
      this.model.website = response.data.website
      this.model.workingHours = response.data.workingHours
      this.model.commonUser = response.data.commonUser
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
        const response = await axios.put(
          `${ApiAddress}api/update-organization?organizationCommonUserId=${this.model.commonUserId}`,
          {
            name: this.model.name,
            photoPath: this.model.photoPath,
            legalAddress: this.model.legalAddress,
            website: this.model.website,
            workingHours: this.model.workingHours
          },
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        this.$router.push('/organization-profile')
      } catch (error) {
        console.error('Error updating profile:', error)
      }
    }
  }
}
</script>

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
                  <b-form-group label="Название организации:" label-for="name">
                    <b-form-input v-model="model.name" id="name" type="text"></b-form-input>
                  </b-form-group>
                  <!-- <b-form-group label="Фамилия:" label-for="lastName">
                      <b-form-input v-model="model.lastName" id="lastName" type="text"></b-form-input>
                    </b-form-group> -->
                  <b-form-group label="Путь к фото профиля:" label-for="photoPath">
                    <b-form-input
                      v-model="model.photoPath"
                      id="photoPath"
                      type="text"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group label="Адрес организации:" label-for="address">
                    <b-form-input v-model="model.legalAddress" id="legalAddress"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Веб-сайт организации:" label-for="website">
                    <b-form-input v-model="model.website" id="website"></b-form-input>
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

<!-- <template> -->
<!-- <div class="profile-for-volunteers"> -->
<!-- <div class="row no-gutters w-100 h-100"> -->
<!-- <div class="col-md-6 d-flex justify-content-center align-items-center"> -->
<!-- <div class="form-container"> -->
<!-- <div class="reg-title"> -->
<!-- <div class="reg-tittle-content"> -->
<!-- <div class="heading">Редактирование профиля</div> -->
<!-- <form @submit.prevent="updateProfile"> -->
<!-- <div> -->
<!-- <label for="name">Имя организации:</label> -->
<!-- <input v-model="model.name" id="name" type="text" /> -->
<!-- </div> -->
<!-- <div> -->
<!-- <label for="photoPath">Путь к фото профиля:</label> -->
<!-- <input v-model="model.photoPath" id="photoPath" type="text" /> -->
<!-- </div> -->
<!-- <div> -->
<!-- <label for="legalAddress">Адрес организации:</label> -->
<!-- <input v-model="model.legalAddress" id="legalAddress" type="text" /> -->
<!-- </div> -->
<!-- <div> -->
<!-- <label for="website">Веб-сайт организации:</label> -->
<!-- <input v-model="model.website" id="website" type="text" /> -->
<!-- </div> -->
<!-- <div> -->
<!-- <label for="workingHours">Количество рабочих часов:</label> -->
<!-- <input v-model="model.workingHours" id="workingHours" type="text" /> -->
<!-- </div> -->
<!-- <button type="submit">Сохранить</button> -->
<!-- </form> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div class="col-md-6 d-flex justify-content-center align-items-center"> -->
<!-- <div class="image-container"> -->
<!-- <img alt="placeholder" src="/placeholder.png" /> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </template> -->

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
