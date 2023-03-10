<script setup>
import {useCars} from "../../composables/useCars";

const route = useRoute()
const router = useRouter()
const modal = ref({
  location: false,
  make: false,
  price: false,
})
const {makes} = useCars()

function toggleModal(type) {
  modal.value[type] = !modal.value[type]
}

//Price start
const priceRang = ref({
  min: null,
  max: null,
})

function changePrice() {
  toggleModal('price')
  if (priceRang.value.min && priceRang.value.max) {
    if (priceRang.value.min > priceRang.value.max) return
    router.push(
        {
          query: {
            minPrice:priceRang.value.min,
            maxPrice: priceRang.value.max ,
        }
  }
  )
  }
}

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice
  const maxPrice = route.query.maxPrice
  if (!minPrice & !maxPrice) {
    return 'Any'
  }
  if (!minPrice & maxPrice) {
    return `< $${maxPrice}`
  }
  if (minPrice & !maxPrice) {
    return `>$${minPrice}`
  } else {
    return `$${minPrice}-$${maxPrice}`
  }
})
</script>

<template>
  <div
      class="shadow border w-64 mr-10 z-30 h-[190px]">
    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Location</h3>
      <h3 @click="toggleModal('location')"
          class="text-blue-400 capitalize">
        {{ route.params.city }}
      </h3>
      <base-modal v-if="modal.location"
                  @close="toggleModal('location')"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3>Make</h3>
      <h3 class="text-blue-400 capitalize"
          @click="toggleModal('make')">
        {{
          route.params.make ? route.params.make : 'any'
        }}
      </h3>
      <base-modal v-if="modal.make" :list="makes"
                  @close="toggleModal('make')"/>
    </div>

    <div
        class="p-5 flex justify-between relative cursor-pointer">
      <h3 @click="toggleModal('price')">
        Price</h3>
      <div v-if="modal.price"
           class="absolute border shadow left-52 p-5 top-1 -m-1 bg-white">
        <input
            placeholder="Min"
            class="border p-1 rounded"
            type="number"
            v-model="priceRang.min"/>
        <input placeholder="Max"
               class="border p-1 rounded mt-2"
               v-model="priceRang.max"/>
        <button @click="changePrice"
                class="bg-blue-400 w-full mt-2 rounded text-white p-1">
          Apply
        </button>
      </div>
      <h3 class="text-blue-400 capitalize">
        {{ priceRangeText }}</h3>
    </div>
  </div>
</template>