<template>
  <div class="status-container">
    <EntityStatusItem
      v-for="status in statuses"
      :key="status.icon"
      :status="status"
      :selected="status.name === selectedStatus"
      @onSelectStatus="selectStatus"/>
  </div>
</template>

<script>
import EntityStatusItem from './EntityStatusItem'

export default {
  components: {
    EntityStatusItem
  },
  props: {
    statuses: {
      type: Array,
      default: () => [],
      require: true
    }
  },
  data() {
    return {
      selectedStatus: ''
    }
  },
  methods: {
    selectStatus(name) {
      this.selectedStatus = name
    }
  }
}
</script>

<style scoped>
.status-container {
  display: flex;
  padding: 0.5rem 1.2rem 1rem;
  justify-content: space-between;
}
</style>
