<template>
<div>
  <Header :homeData="page" />
  <Hero :homeData="page" />
  <Features :homeData="page" />
  <Shop :homeData="page" />
  <Footer :homeData="page" />
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()

    return {
      page
    }
  }
}
</script>