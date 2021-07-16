<template>
  <vue-good-table
    :columns="columns"
    :rows="rows"
    :search-options="{
      enabled: true,
      externalQuery: searchTerm,
    }"
    :pagination-options="{
      enabled: true,
      perPage: pageLength,
    }"
  >
    <template slot="table-row" slot-scope="props">
      <!-- Column: Name -->
      <div v-if="props.column.field === 'fullName'" class="text-nowrap">
        <b-avatar :src="props.row.avatar" class="mx-1" />
        <span class="text-nowrap">{{ props.row.fullName }}</span>
      </div>

      <!-- Column: Status -->
      <span v-else-if="props.column.field === 'status'">
        <b-badge :variant="statusVariant(props.row.status)">
          {{ props.row.status }}
        </b-badge>
      </span>

      <!-- Column: Action -->
      <span v-else-if="props.column.field === 'action'">
        <span>
          <b-dropdown
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="text-body align-middle mr-25"
              />
            </template>
            <!-- TODO: put dynamic id into route -->
            <b-dropdown-item to="">
              <feather-icon icon="EditIcon" />
              <span>Edit</span>
            </b-dropdown-item>
          </b-dropdown>
        </span>
      </span>

      <!-- Column: Common -->
      <span v-else>
        {{ props.formattedRow[props.column.field] }}
      </span>
    </template>

    <!-- pagination -->
    <template slot="pagination-bottom" slot-scope="props">
      <div class="d-flex justify-content-between flex-wrap">
        <div class="d-flex align-items-center mb-0 mt-1">
          <span class="text-nowrap"> Showing 1 to </span>
          <b-form-select
            v-model="pageLength"
            :options="['3', '5', '10']"
            class="mx-1"
            @input="(value) => props.perPageChanged({ currentPerPage: value })"
          />
          <span class="text-nowrap"> of {{ props.total }} entries </span>
        </div>
        <div>
          <b-pagination
            :value="1"
            :total-rows="props.total"
            :per-page="pageLength"
            first-number
            last-number
            align="right"
            prev-class="prev-item"
            next-class="next-item"
            class="mt-1 mb-0"
            @input="(value) => props.pageChanged({ currentPage: value })"
          >
            <template #prev-text>
              <feather-icon icon="ChevronLeftIcon" size="18" />
            </template>
            <template #next-text>
              <feather-icon icon="ChevronRightIcon" size="18" />
            </template>
          </b-pagination>
        </div>
      </div>
    </template>
  </vue-good-table>
</template>

<script lang="ts">
import {
  BAvatar,
  BBadge,
  BPagination,
  BFormSelect,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import { TableColumn, TableRow } from './Table'

export default {
  components: {
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormSelect,
    BDropdown,
    BDropdownItem,
  },
  props: {
    columns: {
      type: Array as () => TableColumn[],
      required: true,
    },
    rows: {
      type: Array as () => TableRow[],
      required: true,
    },
  },
  data() {
    return {
      pageLength: 3,
      searchTerm: '',
    }
  },
  computed: {
    statusVariant(): (status: any) => any {
      const statusColor: any = {
        Current: 'light-primary',
        Professional: 'light-success',
        Rejected: 'light-danger',
        Resigned: 'light-warning',
        Applied: 'light-info',
      }

      return (status) => statusColor[status]
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/vue/libs/vue-good-table.scss';
</style>
