<template>
<div>
  <Header />
  <Hero />
  <Features />
  <Shop />
  <Footer />
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
