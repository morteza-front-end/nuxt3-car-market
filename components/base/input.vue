<template>
  <input
      type="text"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Search by city..."
      @input="update($event)"
  />
</template>
<script setup>
const props = defineProps(['modelValue'])
const emit= defineEmits(['update:modelValue'])
const update =(event)=>{
  emit('update:modelValue',event.target.value)
}
</script>