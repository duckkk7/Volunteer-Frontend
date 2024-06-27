<template>
  <div class="body">
    <main>
      <div class="screenWithBack">
        <div class="firstScreen">
          <div class="slogan__1">Добро пожаловать в единое волонтерское движение!</div>
          <div class="slogan__2">Творить добро и делать мир лучше!</div>
          <div class="btn__con">
            <a class="btn__vol" href="#">Волонтер</a>
            <a class="btn__org" href="#">Организация</a>
          </div>
        </div>
      </div>
      <div class="secondScreen">
        <div class="slogan__2 sc__title">Стань волонтером — найди свое призвание</div>
        <div class="event__con">
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
          <a href="#">
            <div class="event__block">
              <img src="/public/vol-reg-picture.png" alt="img" />
              <div class="event__info">
                <div class="info__title">
                  Общегородская мемориально-патронатная акция (июнь 2024)
                </div>
                <div class="info__org">
                  Комитет общественных связей и молодежной политики г. Москвы
                </div>
                <div class="event__date">
                  <div class="info__date">19 июня 2024</div>
                  <div class="info__time">С 10:00 до 13:00</div>
                </div>
              </div>
            </div>
          </a>
        </div>
        <a class="event__btn" href="#">Посмотреть все</a>
      </div>
    </main>
    <footer>
      <div class="foot__con">
        <div class="foot__left">
          <div class="foot__text__1">
            <b>Подпишитесь на наши обновления</b><br />Чтобы оставаться в курсе последних событий
          </div>
        </div>
        <div class="foot__right">
          <div class="foot__contact">
            <input placeholder="Введите e-mail" type="text" />
            <a class="foot__btn" href="#">Подписаться</a>
          </div>
          <div class="foot__copy">
            Нажимая кнопку “подписаться” вы даете согласие на обработку ваших персональных данных
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.body {
  width: 60vw;
  margin: 0;
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
  width: 30%;
}

.event__con {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* Чтобы те блоки, которые не влезают в строку, опускались вниз */
  margin: 2% 0 3% 0;
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

footer {
  width: 100%;
  background-image: url('/footer-background.jpg');
  background-size: cover;
}

.foot__con {
  width: 80%;
  display: flex; /* Выравнивание по экрану. Здесь в строку. */
  justify-content: space-between; /* Распределить элементы по ширине */
  align-items: baseline; /* Выровнять элементы по горизонтали */
  padding: 5% 10%;
}

.foot__text__1 {
  font-size: 18px;
  line-height: 30px;
}

.foot__contact input {
  font-size: 16px;
  padding: 2%;
  width: 68%;
  border: 1px solid #ff4081;
}

.foot__btn {
  border: 1px solid #ff4081;
  border-radius: 10px;
  padding: 2%; /* Отступы изнутри */
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: white;
  text-decoration: none;
  color: #333333;
  margin-left: 10px;
}

.foot__btn:hover {
  background-color: #ff4081;
  color: white;
}

.foot__copy {
  margin: 3% 0;
  font-size: 14px;
}
</style>
