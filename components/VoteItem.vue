<template>
  <b-row class="text-left">
    <b-col cols="8">
      <h3>{{ name }}</h3>
      <p>Perolehan suara: {{ voteCount }}</p>
    </b-col>
    <b-col :id="`vote-${id}`" class="align-self-center">
      <VoteButton :doc-id="id" />
    </b-col>
    <b-tooltip :target="`vote-${id}`" placement="bottom">
      Vote For <strong>{{ name }}</strong>
    </b-tooltip>
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
