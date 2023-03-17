<script setup>

    //import { ref, computed } from 'vue';

    import Counter from '../components/Counter.vue';
    import Buttons from '@/components/Buttons.vue';

    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore();




    /* const count = ref(0);

    const incrementCount = () => {
        count.value++;
    }

    const decrementCount = () => {
        count.value--;
    }

    const oddOrEver = computed(() => {
        return count.value % 2 == 0 ? 'Par' : 'Impar';
    }) */
    

</script>

<template>

    <section class="section">
        <div class="home container has-text-centered">
            <h1 class="title">Home</h1>
            <!-- <p class="subtitle count">{{store.count}}</p> -->

            <Buttons />

            <!-- <div class="box">
                Es {{ store.oddOrEver }}
            </div> -->

            hola probando component counter
            <Counter />

        </div>
    </section>



</template>

<style scoped>




</style>