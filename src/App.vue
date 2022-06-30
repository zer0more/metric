<script setup>
  import Header from "./components/Header.vue"
  import Hero from "./components/Hero.vue"
  import Press from "./components/Press.vue"
  import Features from "./components/Features.vue"
  import Pricing from "./components/Pricing.vue"
  import Customers from "./components/Customers.vue" 
  import Clients from "./components/Clients.vue"
  import Footer from "./components/Footer.vue"

</script>

<template>
  <Header />
  <Hero />
  <Press />
  <Features id="features"/>
  <Pricing id="pricing"/>
  <Customers id="customers" />
  <Clients />
  <Footer />
</template>