<template>
  <div id="home">
    <section id="header">
      <div class="brand">
        <a :href="getRouteLink('home')">Proxima</a>
      </div>
      <div class="nav-links">
        <a class="loginBtn" :href="getRouteLink('login')">Login</a>
        <a class="signupBtn" :href="getRouteLink('signup')">Signup</a>
      </div>
    </section>
    <section id="content">
      <div class="login">
        <span class="head">Login</span>
        <form @submit.prevent="login">
          <input type="email" placeholder="Enter Email Id" v-model="email" />
          <input type="password" placeholder="Enter Password" v-model="password" />
          <button>Login</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    getRouteLink(routeName) {
      console.log("route:", this.$router);
      return this.$router.resolve({ name: routeName }).href;
    },
    login() {
      console.log("Form Submitted");
    }
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  background-image: url("../assets/cool-eclipse.jpg") !important;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: honeydew;
}
#header .brand a {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
  color: green;
  padding: 12px 18px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
}
#header .nav-links a {
  font-size: 1.1rem;
  line-height: 1.4;
  padding: 12px 18px;
  margin-left: 10px;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
}
#header .nav-links .loginBtn {
  border: 1px solid green;
  background-color: #fff;
  color: green;
}
#header .nav-links .signupBtn {
  border: 1px solid green;
  background-color: green;
  color: #fff;
}

#content {
  flex: 1;
  background-color: rgba(10, 10, 10, 0.5);
  padding: 20px;
}
#content .login {
  display: block;
  width: 30%;
  height: 100%;
  padding: 20px;
  float: right;
  border: 1px solid #fff;
  border-radius: 6px;
}
#content .login .head {
  display: block;
  width: 100%;
  font-size: 1.4rem;
  line-height: 1.4;
  color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #aaa;
}
#content .login form input, #content .login form button {
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  padding: 8px 16px;
  margin: 15px 0;
  color: green;
  background-color: #fff;
  border: 1px solid green;
  border-radius: 6px;
}
#content .login form button {
  color: #fff;
  background-color: green;
}
</style>