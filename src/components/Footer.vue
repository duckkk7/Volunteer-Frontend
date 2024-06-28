<template>
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
</template>

<style scoped>
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
