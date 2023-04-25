<script setup>
    import store from '../stores'
    import { computed } from 'vue';

    const meals = computed(()=> store.state.meals)
</script>

<template> 
    <h1>{{meals[0]}}</h1>
</template>