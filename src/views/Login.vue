<template>
    <form class="card auth-card" @submit.prevent="submitHandler">
        <div class="card-content">
            <span class="card-title">Домашняя бухгалтерия</span>
            <div class="input-field">
                <input
                    id="email"
                    type="text"
                    v-model.trim="email"
                    :class="{invalid: !$v.email.email || ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
                >
                <label for="email">Email</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.email.$dirty && !$v.email.required"
                >Это поле обязательно для заполнения</small>
                <small
                    class="helper-text invalid"
                    v-else-if="$v.email.$dirty && !$v.email.email"

                >Введен не коректный еmail адрес </small>
            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{invalid: !$v.password.minLength || ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)} "
                >
                <label for="password">Пароль</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >Без пароля не получится зарегистрировать Вас!</small>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.minLength"
                >Пароль должен быть не короче {{$v.password.$params.minLength.min}} символов! Сейчас {{password.length}}
                    введено.</small>
            </div>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Войти
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Нет аккаунта?
                <router-link to="/register">Зарегистрироваться</router-link>
            </p>
        </div>
    </form>
</template>

<script>
    import {email, required, minLength} from "vuelidate/lib/validators"
    import messages from "../custom_utils/messages";
    // const axios = require('axios');

    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: '',
            }
        },
        validations: {
            email: {required, email},
            password: {required, minLength: minLength(6)},
        },
        computed: {},
        mounted() {
            if (messages[this.$route.query.message]) {
                this.$message(messages[this.$route.query.message]);
            }
        },
        methods: {

             submitHandler() {

                if (this.$v.$invalid) {
                    this.$v.$touch()
                    return
                }

                let user = {
                    email: this.email,
                    password: this.password
                }
                user = JSON.stringify(user);
                let fd = new FormData();
                fd.append("user", user)

                this.axios.post('http://ruletka-server/login', fd)
                .then(function(response){
                    console.log(response)
                })
                .catch(function(){

                })

                try{
                    console.log(axios);
                }catch(e){

                }

            },
        }
    }
</script>

<style scoped>

</style>
