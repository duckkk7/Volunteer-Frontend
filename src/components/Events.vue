<script>
import axios from 'axios'
import { ApiAddress } from '@/common.ts'

export default {
  name: 'events',
  data() {
    return {
      allEvents: [], // Список всех событий, полученных с сервера
      events: [], // Отфильтрованный список событий для отображения
      page: 1,
      pageSize: 10,
      isLoading: false,
      hasMore: true,
      totalCount: 0,
      searchQuery: '',
      searchCity: ''
    }
  },
  created() {
    this.fetchEvents()
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    async fetchEvents() {
      if (this.isLoading || !this.hasMore) return

      this.isLoading = true
      try {
        const response = await axios.get(`${ApiAddress}api/GetAllEvents`, {
          params: {
            page: this.page,
            pageSize: this.pageSize
          }
        })
        const newEvents = response.data.map((event) => ({
          id: event.id,
          title: event.title,
          photoPath: event.photoPath, // Default image if photoPath is null
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
        this.allEvents = [...this.allEvents, ...newEvents]
        this.filterEvents()

        // Получение общего количества событий из заголовков ответа
        this.totalCount = parseInt(response.headers['x-total-count'], 10)

        // Проверка, есть ли еще события для загрузки
        if (this.allEvents.length >= this.totalCount) {
          this.hasMore = false
        } else {
          this.page++
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        this.isLoading = false
      }
    },
    filterEvents() {
      this.events = this.allEvents.filter((event) => {
        const matchesQuery = event.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesCity = event.city.toLowerCase().includes(this.searchCity.toLowerCase())
        return matchesQuery && matchesCity
      })
    },
    onScroll() {
      const bottomOfWindow = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10
      if (bottomOfWindow) {
        this.fetchEvents()
      }
    },
    handleSearch() {
      this.filterEvents()
    }
  }
}
</script>

<template>
  <div class="body">
    <main>
      <div class="search-panel">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Поиск по событиям.."
        />
        <input
          type="text"
          v-model="searchCity"
          placeholder="Поиск по городу.."
        />
        <button @click="handleSearch">Поиск</button>
      </div>
      <div class="secondScreen">
        <div class="slogan__2 sc__title">
          Добрые дела рядом с вами
        </div>
        <div class="event__con">
          <a
            v-for="event in events"
            :key="event.id"
            @click="$router.push(`/event/${event.id}`)"
          >
            <div class="event__block">
              <img :src="event.photoPath ? `${event.photoPath}` : '/public/vol-reg-picture.png'" alt="img" />
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
      </div>
    </main>
  </div>
</template>

<style scoped>
.body {
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  font-family: sans-serif;
  background-color: #f0f8ff;
  padding: 3%;
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

.search-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.search-panel input {
  margin: 0 10px;
  padding: 10px;
  font-size: 16px;
}

.search-panel button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #00829b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-panel button:hover {
  background-color: #005f6b;
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
  margin: 3% 0 3% 0;
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
  width: 80%;
  margin: 0 auto;
  display: grid;
  justify-items: center;
}

.secondScreen a {
  text-decoration: none;
  color: black;
  max-width: 20%;
  margin-left: 3%;
}

.event__con {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap; /* Чтобы те блоки, которые не влезают в строку, опускались вниз */
  /* margin: 2% 0 3% 0; */
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

@media (max-width: 1200px) {
  .secondScreen a {
    max-width: 30%;
  }
}

@media (max-width: 992px) {
  .secondScreen a {
    max-width: 45%;
  }
}

@media (max-width: 768px) {
  .secondScreen a {
    max-width: 100%;
  }
}

/* &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;style for footer-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; */
</style>
