<template>
  <b-row class="text-center">
    <b-col cols="8">
      <h2>{{ name }}</h2>
      <p>Perolehan suara: {{ voteCount }}</p>
    </b-col>
    <b-col><VoteButton :doc-id="id"/></b-col>
  </b-row>
</template>
<script>
import VoteButton from '~/components/VoteButton.vue'

export default {
  components: { VoteButton },
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    voteCount: {
      type: Number,
      default: 0
    }
  }
}
</script>
