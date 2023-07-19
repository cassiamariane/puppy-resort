<template>
    <div id="container">
        <!--
        <div class="box" id="pix-box">
            <span>Copie o código ou escaneie o QR CODE</span>
            <p>Ao copiar o código, abra o seu aplicativo de preferência cadastrado no PIX e realize o pagamento.</p>
            <img id="qrimg" src="@/assets/img/qrcode.svg">
            <Button text="Copiar código" theme="primary" id="copiar"></Button>
        </div>
        -->
        <div class="box" id="confirm-box">
            <span>Obrigado!</span>
            <p>O seu pagamento foi confirmado com sucesso. Te desejamos uma ótima experiência conosco.</p>
            <img src="@/assets/img/pgtrealizado.png" id="confirma">
            <Button text="Consultar minhas reservas" theme="primary" id="reservas"></Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/layout/TheButton.vue';
import TheLoading from '@/components/layout/TheLoading.vue';

</script>

<style scoped lang="scss">
#container {
    align-items: center;
    display: flex;
    min-height: 90vh;
    justify-content: center;
    padding: 3rem 2rem 8rem;
   .box{
        flex: 0 1;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        border-radius: 5px;
        padding: 2rem;
        box-shadow: -10px 10px 20px rgba(0, 0, 0, .3);
        background-color: #fff;
        box-sizing: border-box;
        min-width: 100%;
        align-items: center;
        justify-content: center;
        span{
            font-size: 20px;
            font-weight: bold;
        }
        p{
            font-size: 15px;
        }
        #qr-img{
            max-width: 20rem;
        }
        #confirma{
            margin-top:2rem;
            margin-bottom: 2rem;
            max-width: 100%;
            width: 10rem;
        }
        button{
            width: 100%;
        }
        @media screen and (min-width: 998px) {
            min-width: 40%;
            max-width: 40%;
         }
    }
}
</style>