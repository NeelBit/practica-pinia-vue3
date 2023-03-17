<script setup>
    import { useCounterStore } from '@/stores/counter';
    import Buttons from '../components/Buttons.vue';

    const store = useCounterStore();
</script>

<template>
    <section class="section">
        <div class="about container has-text-centered">
            <h1 class="title">About</h1>

            <Buttons />

        </div>

    </section>


</template>