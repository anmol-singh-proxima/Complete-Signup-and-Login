<template>
  <div id="home">
    <section id="header">
      <div class="brand">
        <a :href="getRouteLink('start')">Proxima</a>
      </div>
      <div class="nav-links">
        <a class="loginBtn" :href="getRouteLink('login')">Login</a>
        <a class="signupBtn" :href="getRouteLink('signup')">Signup</a>
      </div>
    </section>
    <section id="content">
      <div class="login">
        <span class="head">Login</span>
        <span class="validation-alert" v-if="validationAlert">{{validationAlert}}</span>
        <span class="error" v-if="errorAlert">Error {{errorAlert.code}}: {{errorAlert.message}}</span>
        <form @submit.prevent="login">
          <input type="email" placeholder="Enter Email Id" id="email" v-model="email" />
          <input type="password" placeholder="Enter Password" id="password" v-model="password" />
          <button>Login</button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorAlert: null,
      validationAlert: null,
    }
  },
  methods: {
    getRouteLink(routeName) {
      return this.$router.resolve({ name: routeName }).href;
    },
    alertMessageDisplay(message, id) {
      this.validationAlert = message;
      document.getElementById(id).focus();
      setTimeout(() => {
        this.validationAlert = null;
      }, 3000);
      return false;
    },
    formValidation() {
      if(this.email === '') {
        return this.alertMessageDisplay('Please enter the email', 'email');
      } else if(this.password === '') {
        return this.alertMessageDisplay('Please enter the password', 'password');
      }
      return true;
    },
    async login() {
      if (!this.formValidation()) {
        return false;
      } 
      axios.post('http://localhost:3000/user/login', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        console.log("Response:", response);
        this.$router.push({ name: 'home' });
      })
      .catch((error) => {
        console.log("Error from Server:", error);
        if(error.response) {
          this.errorAlert = {
            code: error.response.status,
            message: error.response.data.message
          }
        } else {
          this.errorAlert = {
            code: error.code,
            message: error.message
          }
        }
        setTimeout(() => {
          this.errorAlert = null;
        }, 3000);
      })
    },
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
#content .login .error, #content .login .validation-alert {
  display: block;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.3;
  padding: 8px 16px;
  border: 1px solid red;
  background: red;
  color: #fff;
  border-radius: 2px;
  margin-top: 10px;
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