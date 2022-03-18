<template>
  <header class="flex justify-center w-full">
    <div class="flex flex-col md:flex-row md:my-12 justify-between items-center w-full md:mx-5 lg:mx-20
    font-medium text-dark-green text-center">
      <input
        type="checkbox"
        class="absolute opacity-0 peer md:hidden"
        id="mobilenav"
        name="mobilenav"
      />
      <label
        for="mobilenav"
        class="relative w-10/12 md:hidden bg-cream border-b border-[#C8DDD7] pt-5 pb-4 peer-checked:after:content-['Close'] peer-checked:after:bg-cream peer-checked:after:absolute peer-checked:after:left-0 peer-checked:after:w-full peer-checked:after:opacity-100"
        >Menu</label
      >
      <div class="-mt-36 duration-300 peer-checked:m-0 md:mt-0 md:order-1">
        <ul class="mt-5 mb-5 md:m-0">
          <li class="mb-5 md:mb-0 md:inline-block md:mr-12">
            <a href="" class="hover:text-red hover:underline no-underline text-dark-green">Shop</a>
          </li>
          <li class="md:inline-block">
            <a href="" class="hover:text-red hover:underline no-underline text-dark-green">Gift Cards</a>
          </li>
        </ul>
      </div>
      <div class="order-last md:order-2">
        <a id="logo" href="">
          <img class="h-20" src="../assets/images/logo.svg" alt="Pineway Golf Co logo" />
        </a>
      </div>
      <div class="mb-10 md:m-0 md:order-3">
        <a
          class="md:button-green md:!mt-0"
          target="_blank"
          href="https://squareup.com/appointments/book/myrerq6cxlozqw/LSCFB328PF8G7/start"
          >Schedule a Lesson</a
        >
      </div>
    </div>
  </header>
</template>
