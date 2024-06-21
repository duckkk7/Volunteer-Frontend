<template>
  <nav class="navbar fixed-top">
    <div class="content">
      <div class="navigation">
        <div class="button">О нас</div>
        <div class="button">Волонтерам</div>
        <div class="button">Мероприятия</div>
        <div class="more">
          <div class="button">
            Еще
            <img class="chevron-down" alt="Chevron down" src="/chevrondown1046-9o3i.svg" />
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="log-in">
          <button class="button" @click="$router.push('/login')">Войти</button>
        </div>
        <button class="sign-up" type="button" @click="navigateToRegister">
          {{ registerButtonText }}
        </button>
        <!-- <button class="sign-up" type="button" @click="$router.push('/register/organization')">
          Регистрация организации
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      registerButtonText: 'Регистрация волонтера'
    }
  },
  watch: {
    $route() {
      this.updateRegisterButtonText()
    }
  },
  mounted() {
    this.updateRegisterButtonText()
  },
  methods: {
    updateRegisterButtonText() {
      if (this.$route.path === '/register') {
        this.registerButtonText = 'Регистрация организации'
      } else {
        this.registerButtonText = 'Регистрация волонтера'
      }
    },
    navigateToRegister() {
      if (this.$route.path === '/register') {
        this.$router.push('/register/organization')
      } else {
        this.$router.push('/register')
      }
    }
  }
}
</script>

<style>
.navbar {
  /* align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0; */
  /* z-index: 999; */
}

.navbar .content {
  align-items: center;
  align-self: stretch;
  background-color: #f5f5f5;
  box-shadow: 0 4px 4px #00000040;
  /* display: flex; */
  /* height: 72px; */
  /* justify-content: space-between; */
  /* padding: 0 64px; */
  /* position: relative; */
  /* width: 100%; */
}

/* .navbar .navigation {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 32px;
  position: relative;
} */

.navbar .text-wrapper {
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  /* margin-top: 0;
  position: relative;
  white-space: nowrap;
  width: fit-content; */
}

.navbar .more {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  justify-content: center;
  position: relative;
}

.navbar .chevron-down {
  height: 24px;
  position: relative;
  width: 24px;
}

.navbar .actions {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: flex-end;
  padding: 0 5px;
  position: relative;
}

.navbar .log-in {
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  padding: 8px 20px;
  position: relative;
}

.navbar .button {
  all: unset;
  box-sizing: border-box;
  color: #333333;
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 27px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.navbar .sign-up {
  align-items: center;
  border: 1px solid;
  border-color: #ff4081;
  border-radius: 10px;
  box-shadow: 0 4px 4px #00000040;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  justify-content: center;
  margin-bottom: 0;
  margin-right: 0;
  margin-top: 0;
  overflow: hidden;
  padding: 8px 20px;
  position: relative;
}
</style>
