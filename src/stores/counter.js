import {
    ref,
    computed,
    watch
} from 'vue'
import {
    defineStore
} from 'pinia'

/* export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
}) */

export const useCounterStore = defineStore('contador', () => {

    let count = ref(0);


    function incrementCount() {
        count.value++;

    }

    function decrementCount() {
        count.value--;
    }

    const oddOrEver = computed(() => {
        return count.value % 2 == 0 ? 'Par' : 'Impar';
    })

    return {
        count,
        incrementCount,
        decrementCount,
        oddOrEver
    }
})