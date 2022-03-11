<template>
<div>
  <h1 class="font-brand text-3xl text-bg-gray-600 font-bold underline">
    Hello world!
  </h1>
  <h1 class="font-serif text-3xl text-bg-gray-600 font-bold underline">
    Hello world!
  </h1>
  <h1 class="font-serif font-medium text-3xl text-bg-gray-600 font-bold underline">
    Hello world!
  </h1>
  <h1 class="font-sans font-medium text-3xl text-bg-gray-600 font-bold underline">
    Hello world!
  </h1>
  <h1 class="font-sans text-3xl text-bg-gray-600 font-bold underline">
    Hello world!
  </h1>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  }
}
</script>
