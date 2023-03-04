<template>
  <!-- CAR CARD -->
  <base-card v-for="car in cars" :key="car.id" :car="car"/>
  <!-- CAR CARD -->
</template>
<script setup lang="ts">
import {useCars} from "~/composables/useCars";

const {cars} = useCars()
</script>