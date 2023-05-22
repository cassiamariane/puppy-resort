<template>
   <div id="container">
      <form>
         <div class="flex space">
            <p id="diaria">R$70,00 diária</p>
            <label>Qtd de Pets
               <input type="number" id="qtd" name="qtd">
            </label>
         </div>
         <div class="flex">
            <label>Check-in
               <input type="date" id="check-in" name="check-in">
            </label>
            <label>Check-out
               <input type="date" id="check-out" name="check-out">
            </label>
         </div>
         <hr>
         <div class="flex space">
            <p>R$70 x 4 diárias</p>
            <p id="multiplicacao">R$ 280</p>
         </div>
         <Button text="Agendar" theme="primary" id="agendar" @click.prevent="modalActive = true"></Button>
      </form>
      <div id="modal-container" v-if="modalActive">
         <div id="modal">
            <div>
               <Button text="X" id="closeModal" @click="modalActive = false"></Button>
               <CadastroPet></CadastroPet>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import Button from '@/components/layout/Button.vue';
import { ref } from 'vue'
import CadastroPet from '@/components/schedule/CadastroPetComponent.vue';
const modalActive = ref(false)
</script>

<style scoped lang="scss">
#container {
   display: flex;
   justify-content: center;
   padding: 10rem;
   background-image: url("@/assets/img/paw_print3.svg");
   background-repeat: repeat-x;
   position: relative;

   form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 2rem;
      padding: 2rem;
      box-shadow: 1px 1px 5px #000;
      background-color: #fff;

      .flex {
         display: flex;
         align-items: center;
         justify-content: center;
         margin-bottom: 1rem;

         label {
            #qtd {
               width: 4rem;
            }

            #check-in {
               border-radius: 10px 0px 0px 10px;
               border-right: 2px solid var(--primary-color);
            }

            #check-out {
               border-radius: 0px 10px 10px 0px;
            }
         }
      }

      .space {
         justify-content: space-between;

         #diaria {
            font-weight: 600;
         }
      }

      input {
         background-color: #F8F9F9;
         border: none;
         border-radius: 10px;
         height: 2.5rem;
         padding: 0 1rem;
         color: #222;
         font-size: 1rem;
         outline: none;

         &[type="date"] {
            display: block;
         }

         &:focus {
            border: 2px solid var(--primary-color);
         }
      }

      #agendar {
         margin-top: 1rem;
      }
   }

   #modal-container {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba($color: #000000, $alpha: 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
   }

   #modal {
      position: absolute;
      box-shadow: 1px 1px 5px #000;
      z-index: 10;
      width: 30vw;
      border-radius: 10px;
      div {
         background-color: #fff;
         border-radius: 10px;
         display: flex;

         #closeModal {
            height: 3rem;
            font-size: 20px;
            color: #fff;
            background-color: red;
         }
      }
   }
}
</style>