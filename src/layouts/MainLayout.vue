<template>
    <div class="app-main-layout">

        <navbar @burgerClick="isOpen = !isOpen" ></navbar>
        <sidebar v-model="isOpen" ></sidebar>


        <main class="app-content" :class="{full : !isOpen}">
            <div class="app-page">
                <router-view></router-view>
            </div>
        </main>

        <div class="fixed-action-btn">
            <router-link to="/record" class="btn-floating btn-large blue">
                <i class="large material-icons">add</i>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Navbar from "../components/layouts/main/Navbar";
    import Sidebar from "../components/layouts/main/Sidebar";

    export default {
        name: "MainLayout",
        data(){
          return {
              isOpen : true,
          }
        },

        components: {
            Navbar,
            Sidebar
        }

    }
</script>

<style scoped>

</style>
