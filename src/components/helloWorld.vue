<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="red">{{ msg }}</h1>
    <h3>Caption Inspo based on Taylor Swift's lyrics.</h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.75rem;
  position: relative;
  line-height: 1.9rem;
}

h3 {
  margin-top: 1rem;
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
