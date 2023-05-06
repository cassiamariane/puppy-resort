<template>
    <div id="services-container">
        <h2>Serviços inclusos em nossas hospedagens</h2>
        <div id="services">
            <div class="green-card">
                <img src="@/assets/img/icons/dog-food.svg">
                <p>Alimentação</p>
            </div>
            <div class="brown-card">
                <img src="@/assets/img/icons/backyard.svg">
                <p>Grande Espaço</p>
            </div>
            <div class="green-card">
                <img src="@/assets/img/icons/pet-taxi.svg">
                <p>Pet Táxi</p>
            </div>
            <div class="brown-card">
                <img src="@/assets/img/icons/clinica.svg">
                <p>Clínica 24 horas</p>
            </div>
            <div class="green-card">
                <img src="@/assets/img/icons/banho-tosa.svg">
                <p>Banho e Tosa</p>
            </div>
            <div class="brown-card">
                <img src="@/assets/img/icons/pet-toy.svg">
                <p>Recreação</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
#services-container{
    @media screen and (max-width: 1240px) {
        padding: 1rem;
    }

    @media screen and (min-width: 779px) {
        padding: 5rem;
    }
    h2{
        margin-bottom: 1rem;
    }
    #services{
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        .green-card, .brown-card{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            border-radius: 1rem;
            gap: 1.5rem;
            align-items: center;
            flex: 1 1 6rem;
            p {
                color: #fff;
            }
            img{
                max-width: 3rem;
            }
        }
        .green-card{
            background-color:#51B53C;
        }
        .brown-card{
            background-color:#E86A33;
        }
    }
}
</style>