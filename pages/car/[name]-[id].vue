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
if(!car.value){
  throw createError({
    statusCode: 404,
    message: `Car with ID ${route.params.id} not found!`
  })
}
</script>
<template>
  <!-- CAR DETAIL PAGE -->

    <div>
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