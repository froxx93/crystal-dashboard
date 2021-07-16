export type InputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'url'
  | 'tel'
  | 'search'
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'time'
  | 'range'
  | 'color'
  | 'placeholder' // custom added value for empty form inputs

export interface FormInput {
  size?: number
  type?: InputType
  id: string
  label: string
  model: any
  placeholder?: string
  validationName?: string
  validationRules?: string
}
