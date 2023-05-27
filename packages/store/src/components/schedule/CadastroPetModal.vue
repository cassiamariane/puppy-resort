<template>
    <div id="modal-container" @click="$emit('fechaModal')" v-if="modalActive"></div>
    <Transition name="fade">
        <div id="modal" v-if="modalActive">
            <button id="closeModal" @click="$emit('fechaModal')" v-if="pet.pets.length">+</button>
            <div id="form-container">
                <h2>Antes de tudo, vamos cadastrar seu pet</h2>
                <form>
                    <label for="namepet">
                        <span>Nome do Pet</span>
                        <input required type="text" name="namepet" id="namepet" v-model="name" autofocus>
                    </label>
                    <div class="especie-genero">
                        <label for="especie">
                            <span>Espécie</span>
                            <select name="especie" id="especie" v-model="species">
                                <option value="dog">Cão</option>
                                <option value="cat">Gato</option>
                            </select>
                        </label>
                        <label for="genero">
                            <span>Gênero</span>
                            <select name="genero" id="genero" v-model="gender">
                                <option value="M">M</option>
                                <option value="F">F</option>
                            </select>
                        </label>
                    </div>
                    <label for="raca">
                        <span>Raça</span>
                        <input required type="text" name="raca" id="raca" v-model="breed">
                    </label>
                    <label for="idade">
                        <span>Idade</span>
                        <input required type="number" min="0" name="idade" id="idade" v-model="age">
                    </label>
                    <label for="descricao">
                        <span>Breve descrição do seu pet</span>
                        <textarea required rows="5" name="descricao" id="descricao" v-model="description"></textarea>
                    </label>
                    <span class="error">{{error}}</span>
                    <!-- faz um @click.prevent=funcao e essa funcao chama um composable pra cadastrar o pet, qualquer duvida me avisa -->
                    <Button @click.prevent=cadastraPet text="Finalizar" theme="primary" id="finalizar" />
                </form>
            </div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import Button from '../layout/Button.vue';
import { ref } from 'vue';
import { usePet } from '@/composables/usePet'
const { createPet, data, error } = usePet();
import router from '@/router';

const name = ref('');
const species = ref('');
const gender = ref('');
const breed = ref('');
const age = ref(0);
const description = ref('');

defineEmits(['fechaModal'])

async function cadastraPet() {
    await createPet({
        name: name.value,
        species: species.value,
        gender: gender.value,
        breed: breed.value,
        age: age.value,
        description: description.value
    })

    if(data.value){
        router.go(0);
        return
    }
}


defineProps({
    modalActive: Boolean,
})

import { usePetStore } from '@/stores/PetStore'
const pet = usePetStore();
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-100px);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateX(0);
}

#modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    background: rgba($color: #000000, $alpha: 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    overflow: hidden;
}

#closeModal {
    z-index: 102;
    position: absolute;
    top: 0;
    right: 15px;
    font-size: 30px;
    color: #000000;
    background: transparent;
    transform: rotate(45deg);
}

#modal {
    position: absolute;
    box-shadow: 1px 1px 5px #000;
    z-index: 101;
    border-radius: 10px;
    top: -50px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    width: 90%;

    @media screen and (min-width: 779px) {
        width: 40%;
    }

    #form-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        font-size: 1rem;
        padding: 2rem;
        gap: 2rem;

        @media screen and (min-width: 998px) {
            min-width: 100%;
        }

        h2 {
            color: var(--primary-color);
        }

        form {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 1.5rem;

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

            .especie-genero {
                display: flex;
                gap: 1rem;
            }

            label {
                display: flex;
                flex-direction: column;
                gap: .5rem;
                width: 100%;
            }

            input,
            select,
            textarea {
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

            textarea {
                height: initial;
                padding: 10px;
                resize: none;
                font-family: Roboto, sans-serif;
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

            #finalizar {
                height: 3rem;
                font-size: 20px;
                width: 100%;
            }
        }
    }
}
</style>