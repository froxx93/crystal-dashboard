<template>
  <BCard title="List">
    <Table :columns="columns" :rows="rows" />
  </BCard>
</template>

<script lang="ts">
import Table from '@/components/table/Table.vue'
import { TableColumn, TableRow } from '@/components/table/Table'

export default {
  components: {
    Table,
  },
  data() {
    const columns: TableColumn[] = [
      {
        label: 'Name',
        field: 'name',
        filterOptions: {
          enabled: true,
        },
      },
      {
        label: 'Action',
        field: 'action',
        width: '100px',
      },
    ]

    return {
      columns,
    }
  },
  computed: {
    rows(): TableRow[] {
      return []
      // return this.$store.state.someState.list
    },
  },
  created() {
    // this.$store.dispatch('someState/fetchList')
  },
}
</script>
