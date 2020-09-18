<template>
  <div id="app">
    <test-component
      v-model="title"
      :font_size="font_size"
      @input-font-size="v => font_size = v"
      :image_url="image_url"
      @input-image-url="v => image_url = v"
    ></test-component>
  </div>
</template>

<script>

  import TestComponent from './components/test_component.vue'
  export default {
      components: {
          TestComponent
      },
      data() {
          return {
              title: 'Возьмите на работу плиз',
              font_size: 16,
              image_url: 'https://pbs.twimg.com/media/D0QG1MRW0AAKair.jpg'
          }
      }
  }
</script>
