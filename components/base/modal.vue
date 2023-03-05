<script setup>
const emit = defineEmits(['close','updat'])
function close(){
  emit('close')
}
const city = ref('')
const route = useRoute()
function changeLocation(){
  if(!city.value)return
  if(!isNaN(parseInt(city.value))){
    throw createError({
      statusCode: 400,
      message: 'Invalid city format'
    })
  }
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
  close()
}
</script>
<template>
  <div
      class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
    <input type="text"
           class="border p-1 rounded" v-model="city"/>
    <button @click="changeLocation"
        class="bg-blue-400 w-full mt-2 rounded text-white p-1">
      Apply
    </button>
  </div>
</template>