<script setup>
const props = defineProps({
  list:{
    type:Array,
    required: false
  }
})
const emit = defineEmits(['close','updat'])
function close(){
  emit('close')
}
const city = ref('')
const maker = ref('')
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
function changeMaker(value){
  maker.value=value
  navigateTo(`/city/${route.params.city}/car/${maker.value}`)
  close()
}
</script>
<template>
  <div
      class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
    <template v-if="!list">
      <input type="text"
             class="border p-1 rounded" v-model="city"/>
      <button @click="changeLocation"
              class="bg-blue-400 w-full mt-2 rounded text-white p-1">
        Apply
      </button>
    </template>
    <template v-else>
      <div class="grid grid-cols-3 gap-2 w-[30rem]">
        <span v-for="item in list" class="hover:text-blue-500 hover:scale-105" @click="changeMaker(item)">{{item}}</span>
      </div>
    </template>
  </div>
</template>