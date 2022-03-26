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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YG56N1JE39"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YG56N1JE39');
</script>