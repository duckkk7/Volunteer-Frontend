<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'

export default {
  name: 'events',
  data() {
    return {
      events: []
    }
  },
  created() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await axios.get(`${ApiAddress}api/GetAllEvents`)
        console.log(response.data)
        this.events = response.data.map((event) => ({
          id: event.id,
          title: event.title,
          image: event.photoPath || '/public/vol-reg-picture.png', // Default image if photoPath is null
          startDate: new Date(event.startDate).toLocaleDateString(),
          startTime: new Date(event.startDate).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          }),
          endDate: new Date(event.endDate).toLocaleDateString(),
          endTime: new Date(event.endDate).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          }),
          city: event.city,
          organizationId: event.organizationId
        }))
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }
  }
}
</script>

<template>
  <div class="body">
    <main>
      <div class="secondScreen">
        <div class="slogan__2 sc__title">Стань волонтером — найди свое призвание</div>
        <div class="event__con">
          <a v-for="event in events" :key="event.id" @click="$router.push(`/event/${event.id}`)">
            <!-- <a v-for="event in events" :key="event.id"> -->
            <div class="event__block">
              <!-- TODO: <img :src="event.image" alt="Event image" /> -->
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  {{ event.title }}
                </div>
                <div class="info__org">
                  {{ event.organization }}
                </div>
                <div class="event__date">
                  <div class="info__date">{{ event.startDate }} - {{ event.endDate }}</div>
                  <div class="info__time">{{ event.startTime }} - {{ event.endTime }}</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.body {
  width: 100vw;
  /* margin: 0; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  font-family: sans-serif;
  background-color: #f0f8ff;
}

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for header&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */

/* header {
    width: 100%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  } */

/* .head__con {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1% auto;
    padding-bottom: 1%;
  } */

header a {
  text-decoration: none; /* Убираем подчеркивание ссылки */
  color: #333333;
}

.menu__item {
  margin-right: 50px;
}

.btn__con {
  display: flex;
  align-items: center;
}

.head__logIn {
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 5% 10%; /* Отступы изнутри */
  margin-left: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.head__logIn:hover,
.event__btn:hover {
  background-color: #ff4081;
  color: white;
}

.head__signIn:hover,
.menu__item:hover {
  color: #ff4081;
}

/* -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for main&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */

.screenWithBack {
  width: 100%;
  background-image: url('/header-background.jpg');
  background-size: cover;
}

.firstScreen {
  display: grid; /* Выравнивание по экрану. Здесь в столбик. */
  padding: 5% 10%;
  margin: -15px 0 2% 0;
}

.slogan__1 {
  font-size: 60px;
  font-weight: 700;
  width: 70%;
}

.slogan__2 {
  font-size: 32px;
  color: #333333;
  margin: 2% 0 3% 0;
}

.btn__vol,
.btn__org {
  border-radius: 10px;
  padding: 1% 2%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #00829b;
  text-decoration: none;
  margin-right: 25px;
}

.btn__vol,
.btn__org:hover {
  background-color: #00829b;
  color: white;
}

.btn__org,
.btn__vol:hover {
  background-color: white;
  color: #00829b;
}

.sc__title {
  text-align: center;
}

.secondScreen {
  width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
}

.secondScreen a {
  text-decoration: none;
  color: black;
  max-width: 20%;
  margin-right: 1%;
}

.event__con {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Чтобы те блоки, которые не влезают в строку, опускались вниз */
  /* margin: 2% 0 3% 0; */
}

.event__block {
  width: 100%;
  display: grid;
  padding: 3%;
  border-radius: 15px;
  background-color: white;
  margin-bottom: 10%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.event__block img {
  width: 100%;
  border-radius: 20px;
}

.info__title {
  font-size: 24px;
  line-height: 30px; /* Межстрочный интервал */
  font-weight: 600;
  margin: 5% 0;
}

.event__date {
  display: flex;
  font-size: 12px;
  margin-top: 5%;
}

.info__time {
  margin-left: 50px;
}

.event__btn {
  width: 10%;
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 1%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 5%;
}

/* &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for footer-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
</style>
