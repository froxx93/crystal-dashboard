<template>
  <b-row class="dashboard">
    <tracker
      v-for="tracker in trackers"
      :key="tracker.createdAt"
      :tracker="tracker"
      @remove="() => removeTracker(tracker)"
    />

    <b-col cols="12">
      <b-dropdown
        class="mb-1"
        size="lg"
        variant="outline-primary"
        text="+"
        no-caret
      >
        <b-dropdown-item
          v-for="trackerType in trackerTypes"
          :key="trackerType.value"
          @click="() => addTracker(trackerType)"
          >{{ trackerType.label }}</b-dropdown-item
        >
      </b-dropdown>
    </b-col>

    <b-col v-if="!trackers.length" cols="12">
      <p>There are no trackers added to your dashboard yet.</p>
      <p>Use the button above to add some.</p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Tracker, {
  Tracker as TTracker,
  TrackerType,
  TRACKER_TYPES,
} from './tracker/Tracker.vue'

export default Vue.extend({
  components: {
    Tracker,
  },
  data() {
    const trackers: TTracker[] = []

    return {
      trackerTypes: TRACKER_TYPES,
      trackers,
    }
  },
  methods: {
    addTracker(type: TrackerType): void {
      const tracker = {
        type,
        createdAt: Date.now().toString(),
      }

      // this.trackers.splice(0, 0, tracker) // add to the front
      this.trackers.push(tracker)
    },
    removeTracker(tracker: TTracker): void {
      const index = this.trackers.indexOf(tracker)
      this.trackers.splice(index, 1)
    },
  },
})
</script>
