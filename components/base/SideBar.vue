<script setup lang="ts">
const modal = ref({
  location: false,
  make: false,
  price: false,
})

function toggleModal(type: string, status: boolean) {
  modal.value[type] = status
}
</script>

<template>
  <div
      class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="toggleModal('location',true)"
          class="text-blue-400 capitalize">
        Toronto</h3>
      <base-modal v-if="modal.location"
                  @close="toggleModal('location',false)"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize"
          @click="toggleModal('make',true)">
        Toyota</h3>
      <base-modal v-if="modal.make"
                  @close="toggleModal('make',false)"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer">
      <h3 @click="toggleModal('price',true)">
        Price</h3>
      <base-modal v-if="modal.price"
                  @close="toggleModal('price',false)"/>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>