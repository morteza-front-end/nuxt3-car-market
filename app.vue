<template>
  <div>
    <!-- NAVBAR    -->
    <header class="sticky top-0 z-50 flex
     justify-between items-center
     space-x-1 border-b bg-white p-4
      shadow-lg">
      <a class="text-3xl font-mono" href="#">Car
        Market</a>
    </header>
    <!-- NAVBAR    -->
    <!-- HOME HERO   -->
    <div class="relative h-screen w-full bg-no-repeat bg-cover
    bg-bottom bg-[url(/images/car-ferrari.jpg)]">
      <div
          class="absolute w-full h-full z-10 flex justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl text-white font-serif mb-10">
            Find your drive</h1>
          <!--SEARCH Bar-->
          <div
              class="font-serif w-[1000px] text-2xl rounded-full bg-white flex
               justify-between items-center overflow-hidden drop-shadow-2xl mx-auto">
            <input type="text" class="px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="search by city..." />
            <button class="bg-sky-500 px-10 py-3 text-white">
              Search
            </button>
          </div>
          <!--SEARCH Bar-->
        </div>
      </div>
      <!--  Black Page      -->
      <div
          class="absolute w-full h-full bg-black opacity-50"></div>
    </div>
    <!-- HOME HERO   -->
  </div>
</template>

