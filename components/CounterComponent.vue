<!-- eslint-disable max-len -->
<template>
    <div class="flex flex-col p-2 m-2 w-32 items-center gap-4">
        <div class="flex justify-center items-center rounded-lg w-full h-32 text-white bg-green-500 select-none hover:bg-green-600 transition duration-150 ease-in-out" v-on:click="increment">{{ count }}</div>
        <div class="inline-flex" role="group">
            <button class="bg-green-500 text-white rounded-l-md p-2 hover:bg-green-600 transition duration-150 ease-in-out" v-on:click="increment">+</button>
            <button class="bg-green-500 text-white p-2 hover:bg-green-600 transition duration-150 ease-in-out" v-on:click="reset">Reset</button>
            <button class="bg-green-500 text-white rounded-r-md p-2 hover:bg-green-600 transition duration-150 ease-in-out" v-on:click="decrement">-</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CounterComponent',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>
