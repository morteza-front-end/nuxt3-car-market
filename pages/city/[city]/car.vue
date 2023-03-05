<script setup>
const route = useRoute()
const {toUpperCaseTitle} = useUtility()
useHead({
  title:`${route.params.make? toUpperCaseTitle(route.params.make): 'Cars'} in ${toUpperCaseTitle(route.params.city)}`
})
definePageMeta({
  layout:'custom'
})

</script>
<template>
    <div class="mt-32 flex">
      <!-- CAR SIDE BAR -->
      <base-sideBar/>
      <!-- CAR SIDE BAR -->

      <!-- CAR CARDS -->
      <div class="w-full">
        <nuxt-page/>
      </div>
      <!-- CAR CARDS -->
    </div>
</template>