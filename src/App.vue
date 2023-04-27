<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import { store } from './store/store';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  data() {
    return {
      store
    }
  },
};
</script>

<template>
  <HeaderComponent :header-elements="store.header" />
  <MainComponent />
  <FooterComponent />
</template>

<style scoped>

</style>