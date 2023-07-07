<template>
    <div class="nav">
        <RouterLink class="route-class" to="/">Home</RouterLink>
        <RouterLink class="route-class" to="/about">About</RouterLink>
        <RouterLink class="route-class" to="/movies">Movie</RouterLink>
        <RouterLink v-if="$cookies.get('isAuthenticate') != 1" class="route-class" to="/login">Login</RouterLink>
        <RouterLink v-if="$cookies.get('isAuthenticate') == 1" class="route-class" v-on:click="logout()" to="/">Logout</RouterLink>
    </div>
</template>
<script>
export default{
    name: 'Header',
    methods:{
        logout(){
            $cookies.set('isAuthenticate',0);
        }
    },
}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
    font-size: large;
    padding: 10px;
}
.route-class{
    padding: 15px
}
</style>