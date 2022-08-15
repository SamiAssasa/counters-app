<template>
  <div>
    <form>
      <h1>Add New Counter</h1>
      <label for="name">Name</label>
      <input name="name"
              type="text"
              placeholder="Counter's name"
              v-model="name" />
    </form>
    <div>{{name}}</div>
      <button @click="addNewCounter">Create</button>
    <div>{{ getCounters }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      count: 0,
    };
  },
  methods: {
    addNewCounter() {
      const data = {name: this.name, count: this.count};
      this.$store.dispatch('createNewCounter', data);
    },
  },
  computed: {
    getCounters() {
      return this.$store.getters.getCounters;
    },
  },
};
</script>
