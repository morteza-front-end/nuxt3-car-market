<script setup>
import {useCars} from "../../composables/useCars";

const route = useRoute()
const {cars} = useCars()
const {toUpperCaseTitle} = useUtility()
useHead({
  title:`${toUpperCaseTitle(route.params.name)}`
})
definePageMeta({
  layout:'custom'
})
const car = computed(()=>{
  return  cars.find(car=> car.id === +(route.params.id))
})
</script>
<template>
  <!-- CAR DETAIL PAGE -->

    <div v-if="car">
      <!-- CAR HERO -->
      <car-detail-hero :car="car" />
      <!-- CAR HERO -->
    </div>
    <!-- CAR ATTRIBUTES -->
    <car-detail-attributes :features="car.features" />
    <!-- CAR ATTRIBUTES -->
    <!-- CAR DESCRISPTION -->
   <car-detail-description :description="car.description" />
    <!-- CAR DESCRISPTION -->
    <!-- CAR CONTACT -->
    <car-detail-contact />
    <!-- CAR CONTACT -->
  <!-- CAR DETAIL PAGE   -->
</template>