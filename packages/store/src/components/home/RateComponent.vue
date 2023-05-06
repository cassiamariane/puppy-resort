<template>
    <div id="rate">
        <h2>Depoimentos de nossos clientes</h2>
        <div id="rate-container">
            <div class="rate-card">
                <div class="paws">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                </div>
                <img class="foto-tutor" src="@/assets/img/icons/user.png">
                <p class="nome-tutor">Marisa</p>
                <p class="depoimento">Os animais têm espaço e são separados por tamanhos. Vale uma pena conferir! Os meus já estão com as diárias reservadas!</p>
            </div>
            <div class="rate-card">
                <div class="paws">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                </div>
                <img class="foto-tutor" src="@/assets/img/icons/user.png">
                <p class="nome-tutor">Júlio</p>
                <p class="depoimento">Percebe-se que os responsáveis gostam muito de animais e que conhecem bem suas necessidades, pois o espaço é excelente e os animais tratados com muita atenção e carinho.</p>
            </div>
            <div class="rate-card">
                <div class="paws">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws-marked.png">
                    <img src="@/assets/img/icons/paws.png">
                </div>
                <img class="foto-tutor" src="@/assets/img/icons/user.png">
                <p class="nome-tutor">Rafaela</p>
                <p class="depoimento">Excelente!! O Mike foi super bem tratado lá. Agradeço pelo carinho com meu filho.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
    #rate{
        background-color: #51B53C;
        @media screen and (max-width: 1240px) {
            padding: 1rem;
        }

        @media screen and (min-width: 779px) {
            padding: 5rem;
        }
        h2{
            color: #fff;
            margin-bottom: 1rem;
        }
        #rate-container{
            background-color: #51B53C;
            display:flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            .rate-card{
                display: flex;
                flex-direction: column;
                background-color: #fff;
                border-radius: 1rem;
                gap: 0.5rem;
                padding: 1rem;
                flex: 1 1 11rem;
                .paws{
                    display: flex;
                    gap: 0.3rem;
                    img{
                        max-width: 1.5rem;
                    }
                }
                .foto-tutor{
                    max-width: 4rem;
                    margin: auto;
                    display: block;
                }
                p{
                    color: #222;
                    text-align: center;
                }
                .nome-tutor{
                    font-size: medium;
                }
            }
        }
    }
</style>