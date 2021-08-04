<template>
  <b-row class="dashboard">
    <tracker
      v-for="tracker in trackers"
      :key="tracker.createdAt"
      :tracker="tracker"
      @change="(id) => onTrackerChange(tracker, id)"
      @remove="() => removeTracker(tracker)"
    />

    <b-col cols="12" class="mb-1 d-flex justify-content-between">
      <b-dropdown size="lg" variant="outline-primary" text="+" no-caret>
        <b-dropdown-item
          v-for="trackerType in trackerTypes"
          :key="trackerType.value"
          @click="() => addTracker(trackerType)"
          >{{ trackerType.label }}</b-dropdown-item
        >
      </b-dropdown>
      <b-button
        variant="outline-danger"
        size="lg"
        :disabled="!trackers.length"
        @click="showConfirmClearModal"
        >Clear</b-button
      >
      <b-modal id="modal-1" title="BootstrapVue">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </b-col>

    <b-col v-if="!trackers.length" cols="12">
      <p>There are no trackers added to your dashboard yet.</p>
      <p>Use the button above to add some.</p>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import * as ls from 'local-storage'
import Tracker, {
  Tracker as TTracker,
  TrackerType,
  TRACKER_TYPES,
} from './trackers/Tracker.vue'

export default Vue.extend({
  components: {
    Tracker,
  },
  data() {
    const trackers: TTracker[] = ls.get('trackers') || []

    return {
      trackers,
    }
  },
  computed: {
    trackerTypes(): TrackerType[] {
      return TRACKER_TYPES.filter((trackerType) => {
        return (
          !trackerType.unique ||
          !this.trackers.find(
            (tracker) => tracker.type.value === trackerType.value
          )
        )
      })
    },
  },
  watch: {
    trackers(): void {
      ls.set('trackers', this.trackers)
    },
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
    onTrackerChange(tracker: TTracker, value: any): void {
      /**
       * Simply setting the value prop isn't sufficient since the array of this.trackers itself doesn't update,
       * so splice is used to replace the updated tracker with itself
       */
      const index = this.trackers.indexOf(tracker)
      tracker.value = value
      this.trackers.splice(index, 1, tracker)
    },
    showConfirmClearModal() {
      this.$bvModal
        .msgBoxConfirm(
          'Clearing the dashboard will remove all trackers. Do you really want to continue?',
          {
            title: 'Clear Dashboard',
            okVariant: 'danger',
            okTitle: 'Clear',
            cancelVariant: 'light',
            cancelTitle: 'Cancel',
            hideHeaderClose: true,
            centered: true,
          }
        )
        .then((confirmed: boolean) => {
          if (confirmed) {
            this.trackers = []
          }
        })
    },
  },
})
</script>
