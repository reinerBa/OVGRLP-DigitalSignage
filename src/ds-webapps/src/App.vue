<script setup lang="ts">
import {ref} from 'vue'
import RoomcontrolApp from './RoomcontrolApp.vue';
import DisplaysApp from './DisplaysApp.vue';
import DsManagerApp from './DsManagerApp.vue';
const show = ref('roomcontrol')
</script>

<template>
  <nav>
    <button @click="show='rc'">
      <h5>Roomcontrol</h5>
    </button>
    <button @click="show='dis'">
      <h5>Displays</h5>
    </button>
    <button @click="show='dsm'">
      <h5>DisplayManager</h5>
    </button>
  </nav>
  
  <RoomcontrolApp v-if="show=== 'rc'"/>
  <DisplaysApp v-if="show=== 'dis'"/>
  <DsManagerApp v-if="show=== 'dsm'"/>
</template>

<style lang="stylus" scoped>
nav
  display flex
  justify-content space-around
  width 100vw
  position fixed
  
h5
  margin 0
</style>
