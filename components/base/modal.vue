<script setup>
const emit = defineEmits(['close'])
function close(){
  emit('close')
}
</script>
<template>
  <div
      class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
    <input type="text"
           class="border p-1 rounded"/>
    <button @click="close"
        class="bg-blue-400 w-full mt-2 rounded text-white p-1">
      Apply
    </button>
  </div>
</template>