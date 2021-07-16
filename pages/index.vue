<template>
  <div>
    <h1>Welcome to Crystal Dashboard!</h1>
    <section id="dashboard">
      <b-row class="finders">
        <b-col xl="4" md="6">
          <b-card title="TM Finder">
            <b-card-text>Display radio button grid for TMs here</b-card-text>
          </b-card>
        </b-col>
        <b-col xl="4" md="6">
          <b-card title="Trainer Finder">
            <b-card-text
              >Display radio button grid for trainer types here</b-card-text
            >
          </b-card>
        </b-col>
      </b-row>
      <b-row class="map">
        <b-col>
          <b-img :src="mapJohto" alt="map" width="500px" />
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
import { BCard, BCardText, BImg } from 'bootstrap-vue'
import mapJohto from '@/assets/images/maps/johto.png'

export default {
  components: {
    BCard,
    BCardText,
    BImg,
  },
  data() {
    return {
      mapJohto,
    }
  },
}
</script>

<style></style>
