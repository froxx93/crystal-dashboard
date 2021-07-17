<template>
  <div class="map-wrapper">
    <b-img :src="getFilePath(map)" alt="map" />
    <div
      v-if="marker"
      class="marker"
      :style="`
        width: calc(100% / ${map.width});
        height: calc(100% / ${map.height});
        left: calc(100% / ${map.width} * ${marker.x});
        top: calc(100% / ${map.height} * ${marker.y});
      `"
    />
  </div>
</template>

<script lang="ts">
import { getFilePath } from '@/utils/mapUtils'
import Map from '~/domains/Map'
import Marker from '~/domains/Marker'

export default {
  props: {
    map: {
      type: Object as () => Map,
      required: true,
    },
    marker: {
      type: Object as () => Marker | undefined,
      default: undefined,
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
