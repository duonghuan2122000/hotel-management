<template>
  <div class="about">
    <h1>This is an about page</h1>
    <o-button @click="clickMe">Click Me</o-button>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe() {
      alert("click");
    },
  },
};
</script>
