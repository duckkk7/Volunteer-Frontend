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
        const maxEvents = 4; // Максимальное количество событий
        const response = await axios.get(`${ApiAddress}api/GetAllEvents`)
        console.log(response.data)
        this.events = response.data
          .slice(0, maxEvents) // Ограничение массива событий до указанного количества
          .map((event) => ({
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

<!-- TODO: Растянуть по всему экрану, чтобы было по центру инфа, подчистить по возможности стили -->

<template>
  <div class="body">
    <main>
      <div class="screenWithBack">
        <div class="firstScreen">
          <div class="slogan__1">Добро пожаловать в Единое волонтерское движение</div>
          <div class="slogan__2">Творить добро и делать мир лучше</div>
          <div class="btn__con">
            <a class="btn__vol" @click="$router.push('/register')">Волонтер</a>
            <a class="btn__org" @click="$router.push('/register/organization')">Организация</a>
          </div>
        </div>
      </div>

      <div class="secondScreen">
        <div class="slogan__2 sc__title">
          Добрые дела рядом с вами
        </div>
        <div class="event__con">
          <a
            v-for="event in events.slice(0, 4)"
            :key="event.id"
            @click="$router.push(`/event/${event.id}`)"
          >
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">{{ event.title }}</div>
                <div class="info__org">{{ event.organization }}</div>
                <div class="event__date">
                  <div class="info__date">
                    {{ event.startDate }} - {{ event.endDate }}
                  </div>
                  <div class="info__time">
                    {{ event.startTime }} - {{ event.endTime }}
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <a class="event__btn" @click="$router.push('/events')">Посмотреть все</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
.body {
  margin-top: 80px;
  margin-left: auto;
  margin-bottom: auto;
  font-family: sans-serif;
  background-color: #f0f8ff;
}

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
  height: 320px; /* уменьшаем высоту блока с фоновым изображением */
  background-size: contain; /* изменяем размер фона */
  background-image: url('/header-background.jpg');
  background-position: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}

.firstScreen {
  padding: 5% 10%;
}

.slogan__1 {
  font-size: 46px;
  font-weight: 700;
  width: 90%;
  font-family: "Bauhaus 93", monospace;
}

.slogan__2 {
  font-size: 32px;
  color: #333333;
  margin: 0 0 2% 0;
  font-family: "Bauhaus 93", monospace;
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
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 55px;
  display: grid;
  justify-content: center;
}

.secondScreen a {
  text-decoration: none;
  color: black;
  width: auto;
  max-width: 100%;
}

.event__con {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; /* Чтобы те блоки, которые не влезают в строку, опускались вниз */
  /* margin: 2% 0 3% 0; */
  margin-top: 25px;
  gap: 15px;
}

.event__block {
  width: 100%;
  display: grid;
  padding: 8%;
  margin-bottom: 10%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  min-width: 300px; /* Минимальная ширина для элемента */
  min-height: 420px; /* Минимальная высота для элемента */
  max-height: 421px;
  max-width: 301px;
}

.event__block img {
  width: 100%;
  border-radius: 20px;
}

.info__title {
  font-size: 18px;
  font-weight: 500;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  line-height: 30px; /* Межстрочный интервал */
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
