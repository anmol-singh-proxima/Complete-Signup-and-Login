<template>
  <div id="home">
    <section id="header">
      <div class="brand">
        <span>Proxima</span>
      </div>
      <div class="nav-links">
        <span class="loginBtn">Login</span>
        <span class="signupBtn">Signup</span>
      </div>
    </section>
    <section id="content">
      <div class="about">
        <span class="head">Proxima Site</span>
        <span class="para">This site provides information about the Proxima Centuary. Proxima Centuary is a star in our Galaxy i.e. Milky Way Galaxy.<br/> It is 500 Light years away from our Solar System. It is one of the least brightest Star in our Galaxy.</span>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HomePage',
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
#header .brand span {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
  color: green;
  padding: 12px 18px;
  text-transform: uppercase;
}
#header .nav-links span {
  font-size: 1.1rem;
  line-height: 1.4;
  padding: 12px 18px;
  margin-left: 10px;
  border-radius: 6px;
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
#content .about {
  display: block;
  width: 30%;
  height: 100%;
  padding: 20px;
  float: right;
  border: 1px solid #fff;
  border-radius: 6px;
}
#content .about .head {
  display: block;
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.4;
  color: #fff;
  padding: 10px 0;
  border-bottom: 1px solid #aaa;
}
#content .about .para {
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  color: #fff;
  padding: 10px 0;
}
</style>