<script setup>

    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore();

</script>

<template>
    <p class="subtitle count">{{store.count}}</p>
</template>