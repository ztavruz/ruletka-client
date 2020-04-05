<template>
    <form class="card auth-card" @submit.prevent="registerHandler" >
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
                    v-if="$v.email.$dirty && !$v.email.email"
                >Введен не коректный адрес</small>

            </div>
            <div class="input-field">
                <input
                    id="password"
                    type="password"
                    v-model.trim="password"
                    :class="{invalid: !$v.password.minLength || ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
                >
                <label for="password">Пароль</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.required"
                >Без пароля не получится зарегистрировать Вас!</small>
                <small
                    class="helper-text invalid"
                    v-if="$v.password.$dirty && !$v.password.minLength"
                >Пароль должен быть не менее {{$v.password.$params.minLength.min}} символов!</small>
            </div>
            <div class="input-field">
                <input
                    id="name"
                    type="text"
                    v-model="name"

                    :class="{invalid: !$v.name.maxLength ||  ($v.name.$dirty && !$v.name.required)}"
                >
                <label for="name">Имя</label>
                <small
                    class="helper-text invalid"
                    v-if="$v.name.$dirty && !$v.name.required"

                >Это поле обязательно для заполнения</small>
                <small
                    class="helper-text invalid"
                    v-if="!$v.name.maxLength"

                >Имя не должно превышать {{$v.name.$params.maxLength.max}} символов, сейчас же введено {{name.length}}</small>
            </div>
            <p>
                <label>
                    <input
                        type="checkbox"
                        v-model="agree"
                    />
                    <span>С правилами согласен</span>
                </label>
                <br>
                <small
                    class="helper-text invalid"

                >Требуется согласие</small>
            </p>
        </div>
        <div class="card-action">
            <div>
                <button
                    class="btn waves-effect waves-light auth-submit"
                    type="submit"
                >
                    Зарегистрироваться
                    <i class="material-icons right">send</i>
                </button>
            </div>

            <p class="center">
                Уже есть аккаунт?
                <a href="/">Войти!</a>
            </p>
        </div>
    </form>
</template>

<script>
    import {required, email, minLength, maxLength} from "vuelidate/lib/validators";
    import messages from "../custom_utils/messages";


    export default {
        name: "Register",
        data(){
            return {
                email: "",
                password: "",
                name: "",
                agree: false
            }
        },
        validations: {
            email: {required, email},
            password: {required, minLength : minLength(6)},
            name: {required, maxLength : maxLength(50)},
            agree: {checked: v => v}
        },
        mounted(){
            this.$message("Тестовое сообщение");
        },
        methods: {
            registerHandler(){
                if(this.$v.$invalid){
                    this.$v.$touch();
                    return
                }

                let user = {
                    email: this.email,
                    password: this.password,
                    name: this.name
                }
                user = JSON.stringify(user);
                let fd = new FormData();
                fd.append("user", user);


                this.axios.post('http://ruletka-server/signup', fd)
                .then(function(response){
                    let data = response.data;
                    // data = JSON.parse(data);
                    console.log(data.email)
                })
                .catch(function(error){

                })



                // this.$router.push("/")
            }
        }
    }
</script>

<style scoped>

</style>
