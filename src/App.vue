<script setup>

import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

import Counter from './components/Counter.vue';

const store = useCounterStore();

const nuevoNumAccion = () => {
    store.count = nuevoNum.value;
    nuevoNum.value = 0;
}

const nuevoNum = ref(0);

</script>

<template>
  <header>
    <div class="wrapper">

      <nav class="tabs is-centered is-fullwidth">
        <ul>

            <li>
                <RouterLink v-slot="li" to="/" >Home</RouterLink>
            </li>
            |
            <li>
                <RouterLink to="/about" >About</RouterLink>
            </li>
            
        </ul>
      </nav>
    </div>
  </header>

  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">
        Hello World
      </h1>
      <p class="subtitle">
        My first website with <strong>Bulma</strong>!
      </p>

      <Counter />

    </div>
  </section>

  <RouterView />

    <div class="has-text-centered">
        <div class="box">
                    Es {{ store.oddOrEver }}
        </div>
        <div class="box">
            <!-- <form class="form" @submit.prevent="nuevoNumAccion"> -->
            <form class="form" >
                <div class="field">
                    <label class="label">Ingrese número</label>
                    <div class="control ">
                        <input class="input has-text-centered" type="number" placeholder="Ingrese número" v-model="store.count">
                        <!-- <button class="button is-primary">Submit</button> -->
                    </div>
                </div>
            </form>
        </div>
    </div>



</template>

<style scoped>

    .count {
        font-size: 40px;
    }


</style>
