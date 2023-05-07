<template>
    <div id="services-container">
        <h2>Serviços inclusos em nossas hospedagens</h2>
        <div id="services">
            <div class="card green">
                <img src="@/assets/img/icons/dog-food.svg">
                <p>Alimentação</p>
            </div>
            <div class="card brown">
                <img src="@/assets/img/icons/backyard.svg">
                <p>Grande Espaço</p>
            </div>
            <div class="card green">
                <img src="@/assets/img/icons/pet-taxi.svg">
                <p>Pet Táxi</p>
            </div>
            <div class="card brown">
                <img src="@/assets/img/icons/clinica.svg">
                <p>Clínica 24 horas</p>
            </div>
            <div class="card green">
                <img src="@/assets/img/icons/banho-tosa.svg">
                <p>Banho e Tosa</p>
            </div>
            <div class="card brown">
                <img src="@/assets/img/icons/pet-toy.svg">
                <p>Recreação</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#services-container {
    padding: 2rem;

    @media screen and (min-width: 779px) {
        padding: 2rem 5rem;
    }

    h2 {
        margin-bottom: 1.5rem;
    }

    #services {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        @media screen and (min-width: 779px) {
            gap: 2rem;
        }

        .card {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border-radius: 1rem;
            gap: 1.5rem;
            align-items: center;
            flex: 1 1 6rem;
            box-shadow: 1px 1px 5px #000000;

            &:hover {
                transform: scale(1.02);
                transition: .2s;
            }

            @media screen and (max-width: 368px) {
                &:nth-child(3) {
                    order: 4;
                }

                &:nth-child(6) {
                    order: 7;
                }
            }

            p {
                color: #fff;
            }

            img {
                max-width: 3rem;
            }


            &.green {
                background-color: #51B53C;
            }

            &.brown {
                background-color: #E86A33;
            }
        }
    }
}
</style>