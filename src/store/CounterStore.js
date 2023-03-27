import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {

  // Data
  state() {
    return {
      count: 0
    };
  },

  // Methods
  actions: {
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    }
  },

// Computed
  getters: {
    remaining() {
      return 10 - this.count;
    }
  }
});