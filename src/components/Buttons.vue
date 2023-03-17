<script setup>
    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore();
</script>

<template>
    <div class="buttons is-centered">
        <button class="button is-medium is-danger" @click="store.decrementCount()">-</button>
        <button class="button is-medium is-success" @click="store.incrementCount()">+</button>
    </div>

</template>