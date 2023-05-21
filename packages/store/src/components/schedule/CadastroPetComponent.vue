<template>
    <div id="form-container">
        <form>
            <label for="namepet">
                <span>Nome do Pet</span>
                <input required type="text" name="namepet" id="namepet" v-model="namepet">
            </label>
            <label for="especie">
                <span>Espécie</span>
                <select name="especie" id="especie" v-model="especie">
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                </select>
            </label>
            <label for="genero">
                <span>Gênero</span>
                <input required type="text" name="genero" id="genero" v-model="genero">
            </label>
            <label for="raca">
                <span>Raça</span>
                <input required type="text" name="raca" id="raca" v-model="raca">
            </label>
            <label for="idade">
                <span>Idade</span>
                <input required type="number" name="idade" id="idade" v-model="idade">
            </label>
            <Button text="Finalizar" theme="primary" id="finalizar"><img
                src="@/assets/img/backward.svg"></Button>
        </form>
    </div>
</template>

<script setup lang="ts">
    import Button from '../layout/Button.vue';
    import { ref } from 'vue';
    const namepet = ref('');
    const especie = ref('');
    const genero = ref('');
    const raca = ref('');
    const idade = ref('');
</script>

<style scoped lang="scss">
#form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 77vh;
    font-size: 1rem;
    width: 50%;
    margin: 3rem 0;

    @media screen and (min-width: 779px) {
        padding: 0 3rem;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1rem;
        margin-bottom: 2rem;

        .flex {
            display: flex;
            gap: 1rem;
            flex-direction: column;

            @media screen and (min-width: 779px) {
                flex-direction: row;
                gap: 1.5rem;
            }

            label {
                flex: 1;
            }
        }

        label {
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }

        input, select {
            background-color: #F8F9F9;
            border: none;
            border-radius: 10px;
            height: 2.5rem;
            padding: 0 1rem;
            color: #222;
            font-size: 1rem;
            outline: none;

            &:focus {
                border: 2px solid var(--primary-color);
            }
        }

        #check {
            label {
                display: flex;
                align-items: center;
                flex-direction: row;
                font-size: 14px;
                gap: 1rem;
            }
        }
        
        #login {
            font-size: 14px;
            color: #222;
            cursor: pointer;
        }

        span.error {
            color: #ff4848;
        }

        #avancar {
            height: 3rem;
            font-size: 20px;
        }
    }
}
</style>