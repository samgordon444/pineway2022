<template>
  <header class="flex flex-col md:flex-row mx-10 font-medium text-dark-green text-center">
    <input
      type="checkbox"
      class="absolute opacity-0 peer"
      id="mobilenav"
      name="mobilenav"
    />
    <label
      for="mobilenav"
      class="relative bg-cream border-b border-[#C8DDD7] pt-5 pb-4 peer-checked:after:content-['Close'] peer-checked:after:bg-cream peer-checked:after:absolute peer-checked:after:left-0 peer-checked:after:w-full peer-checked:after:opacity-100"
      >Menu</label
    >
    <div class="-mt-36 duration-300 peer-checked:m-0">
      <ul class="mt-5 mb-5 md:m-0">
        <li class="mb-5 md:mb-0">Shop</li>
        <li>Gift Cards</li>
      </ul>
    </div>
    <div class="self-center order-last md:order-3">
      <a id="logo" href="">
        <img class="h-20" src="../assets/images/logo.svg" alt="Pineway Golf Co logo" />
      </a>
    </div>
    <div class="mb-10 md:m-0">
      <a
        class="md:button-green"
        target="_blank"
        href="https://squareup.com/appointments/book/myrerq6cxlozqw/LSCFB328PF8G7/start"
        >Schedule a Lesson</a
      >
    </div>
  </header>
</template>
