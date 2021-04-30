<template>
  <button
    :class="{ 'selected': selected }"
    class="root"
    column
    @click="setSelected(status.name)">
    <v-icon class="mb-1">{{ status.icon }}</v-icon>
    <span class="status-label text-uppercase">{{ status.label }}</span>
    <span class="status-total">{{ status.value }}</span>
  </button>
</template>

<script>
export default {
  props: {
    status: {
      type: Object,
      default: () => {},
      require: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setSelected(name) {
      this.$emit('onSelectStatus', name)
    }
  }
}
</script>

<style scoped>
.root {
  display: flex;
  flex-direction: column;
  width: 86px;
  align-items: center;
  padding: 11px 0;
  background-color: rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow, background-color 200ms ease-in-out;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.11), 0 1px 2px rgba(0, 0, 0, 0.22);
}

.root:active {
  background-color: rgba(0, 0, 0, 0.05);
}

.root:hover:not(.selected):not(:active) {
  background: var(--v-hover-background-color);
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.13), 0 3px 6px rgba(0, 0, 0, 0.26); */
}

.v-icon {
  color: rgba(0, 0, 0, 0.4);
}

.status-label {
  letter-spacing: 0.5px;
  font-size: 11px;
  line-height: 12px;
  padding-top: 4px;
  color: var(--v-text-secondary-color);
}

.status-total {
  color: var(--v-text-primary-color);
  font-size: 18px;
  line-height: 23px;
}

.root.selected {
  background: var(--v-selected-background-color);
  cursor: default;
}

.root.selected .status-label,
.root.selected .v-icon {
  color: var(--v-primary-color);
}

.selected .status-total {
  font-weight: 500;
}
</style>
