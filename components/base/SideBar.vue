<script setup>
import {useCars} from "../../composables/useCars";

const route = useRoute()
const modal = ref({
  location: false,
  make: false,
  price: false,
})
const {makes} = useCars()
function toggleModal(type) {
  modal.value[type] = !modal.value[type]
}

</script>

<template>
  <div
      class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="toggleModal('location')"
          class="text-blue-400 capitalize">
          {{route.params.city}}
      </h3>
      <base-modal v-if="modal.location"
                  @close="toggleModal('location')"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize"
          @click="toggleModal('make')">
        {{route.params.make ?route.params.make: 'any' }}
      </h3>
      <base-modal v-if="modal.make" :list="makes"
                  @close="toggleModal('make')"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer">
      <h3 @click="toggleModal('price')">
        Price</h3>
      <base-modal v-if="modal.price"
                  @close="toggleModal('price')"/>
      <h3 class="text-blue-400 capitalize"></h3>
    </div>
  </div>
</template>