<template>
  <b-button @click="$emit('vote', docId)">Vote</b-button>
</template>
<script>
export default {
  props: {
    docId: {
      type: String,
      required: true,
      default: ''
    }
  },
  methods: {
    vote: function(docId) {}
  }
}
</script>
