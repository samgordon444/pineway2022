<template>
  <header class="flex justify-center w-full">
    <div class="md:my-12 w-full md:mx-5 lg:mx-20
    font-medium text-dark-green text-center">
      <input
        type="checkbox"
        class="absolute opacity-0 peer md:hidden"
        id="mobilenav"
        name="mobilenav"
      />
      <label
        for="mobilenav"
        class="absolute z-10 left-1/2 -translate-x-1/2 w-10/12 inline-block md:hidden bg-cream border-b border-[#C8DDD7] pt-5 pb-4 peer-checked:after:content-['Close'] peer-checked:after:bg-cream peer-checked:after:absolute peer-checked:after:left-0 peer-checked:after:w-full peer-checked:after:opacity-100"
        >Menu</label
      >
      <div class="flex flex-col items-center md:flex-row duration-300 md:mt-4 peer-checked:mt-[160px] peer-checked:translate-y-[-80px] mt-0 translate-y-[calc(-100%+160px)] md:translate-y-0">
        <div class="md:order-1 basis-0 grow md:flex">
          <ul class="mt-5 mb-5 md:m-0">
            <li class="mb-5 md:mb-0 md:inline-block md:mr-12">
              <a href="https://pineway-golf-co.square.site" target="_blank" class="hover:text-red hover:underline no-underline text-dark-green">Shop</a>
            </li>
            <li class="md:inline-block">
              <a href="https://squareup.com/gift/MLRQWFAAP8EB6/order" target="_blank" class="hover:text-red hover:underline no-underline text-dark-green">Gift Cards</a>
            </li>
          </ul>
        </div>
        <div class="order-last md:order-2 basis-0 grow">
          <a id="logo" href="">
            <img class="h-20 mx-auto" src="../assets/images/logo.svg" alt="Pineway Golf Co logo" />
          </a>
        </div>
        <div class="mb-10 md:m-0 md:order-3 basis-0 grow md:flex md:flex-row-reverse">
          <a
            class="md:button-green md:!mt-0 hover:underline hover:text-red inline-block"
            target="_blank"
            href="https://squareup.com/appointments/book/myrerq6cxlozqw/LSCFB328PF8G7/start"
            >Schedule a Lesson</a
          >
        </div>
      </div>
    </div>
  </header>
</template>
