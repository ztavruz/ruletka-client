<template>
    <div class="container-fluid">
        <div class="header">
            <a href="/spasibo">ОПЛАТА</a>
            <a href="/signup">Регистрация</a>
            <a href="/signin">Вход</a>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row row_chance">
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>100р</h4>
                            </div>
                            <img src="/../../content/img/silver_1.png" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 10р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="#">
                                    <iframe class="pay10" data-id="10" src="https://money.yandex.ru/quickpay/button-widget?targets=%D0%A8%D0%B0%D0%BD%D1%81%20%D0%BD%D0%B0%201000&default-
                                sum=50&button-text=12&any-card-payment-type=on&button-size=m&button-color=black&successURL=&quickpay=small&account=410012210
                                830944&" width="184" height="36" frameborder="0" allowtransparency="true"
                                            scrolling="no">
                                    </iframe>
                                   </a>
                            </div>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>1000р</h4>
                            </div>
                            <img src="/../../content/img/gold_1.png" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 50р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="/pay_100" class="btn btn-primary">Получить шанс</a>
                            </div>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>10 000р</h4>
                            </div>
                            <img src="/../../content/img/gold_2.png" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 250р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="/pay_250" class="btn btn-primary">Получить шанс</a>
                            </div>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>100 000р</h4>
                            </div>
                            <img src="/../../content/img/gold_3.png" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 1000р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="/pay_1000" class="btn btn-primary">Получить шанс</a>
                            </div>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>1000 000р</h4>
                            </div>
                            <img src="/../../content/img/gold_4.jpg" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 5000р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="/pay_5000" class="btn btn-primary">Получить шанс</a>
                            </div>
                        </div>
                    </div>
                    <div class="pay">
                        <div class="card">
                            <div class="card-header">
                                <h4>10 000 000р</h4>
                            </div>
                            <img src="/../../content/img/gold_5.jpg" class="card-img-top сhance_img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Билет: 25000р</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional
                                    content.</p>
                                <a href="/pay_25000" class="btn btn-primary">Получить шанс</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Ruletka"
    }
</script>

<style scoped>
    .content
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: silver;
    }
    .row_chance{
        justify-content: center;
    }
    .card
    {
        width: 250px;
        /*height: 50%;*/
        margin: 10px 10px;
    }
    .сhance_img
    {
        max-width: 250px;
        border: 1px solid #000;
        margin: 0 auto;
    }
    .card-body{
        text-align: center;
    }

    /*.btn:hover{*/
    /*    display: none;*/
    /*}*/
    .btn:hover .pay{
        display: block;
    }










</style>
