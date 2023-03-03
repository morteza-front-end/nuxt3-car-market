<script setup>
const city = ref("")
const cityError = ref(false)
function handleSearch(){
  if(!city.value) return cityError.value= true
  navigateTo(`/city/${city.value}/car`)
}
</script>
<template>
  <div
      class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url(/images/car-ferrari.jpg)]"
  >
    <div
        class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-white">
          Find your drive</h1>
        <!-- HOME SEARCH BAR -->
        <div
            class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
        >
          <base-input v-model="city" :class="cityError?'border border-red-500':''"/>
          <base-button @click="handleSearch"/>

        </div>
        <!-- HOME SEARCH BAR -->
      </div>
    </div>
    <div
        class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>