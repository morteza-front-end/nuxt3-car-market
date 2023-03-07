<template>
  <!-- CAR CARD -->
  <base-card v-for="car in cars" :key="car.id" :car="car" @favor="handleFavorite" :favored="car.id in favorite"/>
  <!-- CAR CARD -->
</template>
<script setup lang="ts">
import {useCars} from "~/composables/useCars";
import {useLocalStorage} from "@vueuse/core";

const {cars} = useCars()
const favorite= useLocalStorage('favorite',{})
const handleFavorite = (id:number)=>{
  if(id in favorite.value){
    delete favorite.value[id]
  }else{
    favorite.value = {
      ...favorite.value,
      [id]:true
    }
  }
}
</script>