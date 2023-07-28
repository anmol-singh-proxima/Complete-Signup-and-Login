<template>
    <div id="home">
        <section id="header">
            <div class="brand">
                <a :href="getRouteLink('start')">Proxima</a>
            </div>
            <div class="nav-links">
                <span v-if="user">Hi {{ user.name }}!</span>
                <span class="logoutBtn" @click="logout">Logout</span>
            </div>
        </section>
        <section id="content">
            <div class="about">
                <span class="head">Proxima Site</span>
                <span class="para">This site provides information about the Proxima Centuary. Proxima Centuary is a star in our Galaxy i.e. Milky Way Galaxy.<br/> It is 500 Light years away from our Solar System. It is one of the least brightest Star in our Galaxy.</span>
            </div>
        </section>
        <section id="footer">
            <span>Copyright &copy; All Rights Reserved</span>
            <span>Designed By Anmol Kumar Singh</span>
        </section>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {
    name: 'HomePage',
    data() {
        return {
            user: null,
        }
    },
    created() {
        const token = sessionStorage.getItem('token');
        if(token) {
            console.log("User has token");
            axios.post("http://localhost:3000/user/get")
            .then((response) => {
                console.log("Response in retreiving user", response);
                this.user = response.data;
            })
            .catch((error) => {
                console.log("Error while retreiving user:", error);
            });
        } else {
            console.log("Token not present");
        }
    },
    methods: {
        getRouteLink(routeName) {
            return this.$router.resolve({ name: routeName }).href;
        },
        logout() {

        }
    }
}
</script>

<style scoped>
#home {
    display: flex;
    flex-direction: column;
    background-image: url("../assets/earth.jpg") !important;
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
#header .nav-links a, #header .nav-links span {
    font-size: 1.1rem;
    line-height: 1.4;
    padding: 12px 18px;
    margin-left: 10px;
    text-decoration: none;
    cursor: pointer;
    color: green;
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
#footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #333;
    color: #eee;
    padding: 15px;
}
#footer span {
    font-size: 0.85rem;
    line-height: 1.3;
}
</style>