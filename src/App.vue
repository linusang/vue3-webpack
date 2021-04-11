<template>
  <div>Vue binding message: {{ message }}.</div>
  <div>
    Count: {{ count }}
    <button type="button" @click="increment()">Increment</button>
  </div>
  <div class="sass larger">this is using sass from a sass file</div>
  <img src="img/master.png" />
  <div class="sfc x-large">
    this is using sass inside vue Single File Component.
  </div>
</template>

<script lang="ts" src="./App.ts"></script>

<style scoped lang="scss">
.sfc {
  color: blue;
  &.x-large {
    font-size: x-large;
  }
}
</style>
