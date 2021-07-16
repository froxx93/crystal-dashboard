interface FilterOptions {
  enabled: boolean
  placeholder?: string
}

export interface TableColumn {
  label: string
  field: string
  filterOptions?: FilterOptions
  [key: string]: any // to allow vue-good-table column options
}

export type TableRow = string | number

export interface Table {
  columns: TableColumn[]
  rows: TableRow[]
}
