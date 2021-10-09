<template>
  <div class="map-wrapper">
    <b-img :src="getFilePath(map)" alt="map" />
    <div
      v-for="(marker, index) in markers"
      :key="index"
      class="marker"
      :style="`
        width: calc(100% / ${map.width} * ${marker.width || 1});
        height: calc(100% / ${map.height} * ${marker.height || 1});
        left: calc(100% / ${map.width} * ${marker.x});
        top: calc(100% / ${map.height} * ${marker.y});
      `"
    />
  </div>
</template>

<script lang="ts">
import { getFilePath } from '~/utils/mapUtils'
import Map from '~/domains/Map'
import Marker from '~/domains/Marker'

export default {
  props: {
    map: {
      type: Object as () => Map,
      required: true,
    },
    markers: {
      type: Array as () => Marker[],
      default: () => [],
    },
  },
  data() {
    return {
      getFilePath,
    }
  },
}
</script>

<style lang="scss" scoped>
@keyframes fade-background {
  0% {
    background-color: rgba(255, 255, 255, 0.8);
  }
  50% {
    background-color: rgba(255, 255, 255, 0);
  }
  100% {
    background-color: rgba(255, 255, 255, 0.8);
  }
}

.map-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;

  > * {
    width: 100%;
  }

  > .marker {
    position: absolute;
    animation: fade-background 1.5s infinite;
    box-shadow: 0 0 3px 3px black;
  }
}
</style>
