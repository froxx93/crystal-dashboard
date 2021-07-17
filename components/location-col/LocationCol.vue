<template>
  <b-col :cols="cols">
    <p>
      <strong>{{ location.map.name }}</strong>
    </p>
    <map-wrapper :map="location.map" :marker="marker" />
  </b-col>
</template>

<script lang="ts">
import Location from '~/domains/Location'
import Marker from '~/domains/Marker'

export default {
  props: {
    location: {
      type: Object as () => Location,
      required: true,
    },
    cols: {
      type: String,
      required: true,
    },
  },
  computed: {
    marker(): Marker {
      const { x, y } = this.location

      return {
        x,
        y,
      }
    },
  },
}
</script>
