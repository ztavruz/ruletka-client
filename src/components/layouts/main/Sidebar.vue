<template>
    <ul class="sidenav app-sidenav " :class="{open : value}">

        <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
        >
            <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
        </router-link>

    </ul>
</template>

<script>
    export default {
        name: "Sidebar",
        props: [
            "value"
        ],
        data()  {
            return {
                links : [
                    {
                        title :"Главная",
                        url : "/",
                        exact : true
                    },
                    {
                        title :"Аккаунт",
                        url : "/account"
                    },
                    {
                        title :"История",
                        url : "/history"
                    },
                    {
                        title :"Планирование",
                        url : "/planning"
                    },
                    {
                        title :"Новая запись",
                        url : "/record"
                    },
                    {
                        title :"Категории",
                        url : "/categories"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
