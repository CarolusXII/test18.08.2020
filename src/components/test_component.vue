<template>
  <div class="test-component">
    <div class="container">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image_url">
        <div class="card-body" :style="{ fontSize: `${font_size}px` }">
          {{ title }}
        </div>
      </div>
      <div class="test-component__inputs-wrapper ml-4">
        <div class="form-group">
          <label for="title">title</label>
          <input
            id="title"
            class="form-control"
            :value="title"
            @input="$emit('input-title', $event.target.value)"
          >
        </div>
        <div class="form-group">
          <label for="fontSize">font size</label>
          <input
            id="fontSize"
            class="form-control"
            :value="font_size"
            @keypress="pressSymbol($event)"
            @keyup="$emit('input-font-size', $event.target.value)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      model: {
          prop: 'title',
          event: 'input-title'
      },
      props: {
          title: {
              default() {
                  return 'MENU';
              }
          },
          font_size: {
              default() {
                  return 16;
              }
          },
          image_url: {
              type: String,
              default() {
                  return 'https://pbs.twimg.com/media/D0QG1MRW0AAKair.jpg';
              }
          }
      },
      methods: {
          pressSymbol(event) {
              if (event.keyCode < 48 || event.keyCode > 57)
                  event.returnValue= false;
          }
      }
  }
</script>

<style lang="scss">
  .test-component {
    max-width: 600px;
    .container {
      display: flex;
      flex-direction: row;
      .card {
        .card-img-top {
          max-width: 100%;
          max-height: 200px;
        }
      }
    }
  }
</style>
