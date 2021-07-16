import { FormInput } from '@/components/form/FormInput'

export interface FormWizardTab {
  id: string
  title: string
  headline: string
  subline?: string
  inputs: FormInput[]
}

export interface FormWizard {
  tabs: FormWizardTab[]
}
