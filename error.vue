<script setup>
const error = useError()
useHead({
  title: 'Error Page'
})

function handleError() {
  navigateTo('/')
}
</script>
<template>
  <div
      class="h-screen w-full flex flex-col items-center justify-center">
    <h1 class="text-9xl">{{error.statusCode}}</h1>
    <p class="text-5xl my-4">{{error.message}}</p>
    <button
        class="border border-sky-500 bg-gray-400 rounded py-3 px-4 mt-4 text-white"
        @click="handleError">Go Back
    </button>
  </div>
</template>