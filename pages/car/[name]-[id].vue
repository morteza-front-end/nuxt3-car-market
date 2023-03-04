<script setup>
const route = useRoute()
const {toUpperCaseTitle} = useUtility()
useHead({
  title:`${toUpperCaseTitle(route.params.name)}`
})
definePageMeta({
  layout:'custom'
})

</script>
<template>
  <!-- CAR DETAIL PAGE -->
    <div>
      <!-- CAR HERO -->
      <car-detail-hero />
      <!-- CAR HERO -->
    </div>
    <!-- CAR ATTRIBUTES -->
    <car-detail-attributes />
    <!-- CAR ATTRIBUTES -->
    <!-- CAR DESCRISPTION -->
   <car-detail-description />
    <!-- CAR DESCRISPTION -->
    <!-- CAR CONTACT -->
    <car-detail-contact />
    <!-- CAR CONTACT -->
  <!-- CAR DETAIL PAGE   -->
</template>