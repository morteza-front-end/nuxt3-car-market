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
    <div class="mt-32 flex justify-center">
      <NuxtErrorBoundary>
        <!-- CAR SIDE BAR -->
        <base-sideBar/>
        <!-- CAR SIDE BAR -->

        <!-- CAR CARDS -->
        <div class="w-full">
          <nuxt-page/>
        </div>
        <!-- CAR CARDS -->
        <template #error="{error}">
          <div class="w-1/2 flex flex-col items-center justify-center">
            <h1 class="text-red-600 text-5xl mb-4">Some thing is wrong!</h1>
            <code>{{error}}</code>
            <button class="bg-sky-500 rounded px-8 py-4 mt-4" @click="error.value=null">Go Back</button>
          </div>
        </template>
      </NuxtErrorBoundary>

    </div>
</template>