export interface IRoute {
  title: string
  path: string
}

export interface ICategory {
  id: string
  title: string
}

export interface IQuest {
  id: number
  title: string
  description: string
  previewImg: string
  coverImg: string
  type: string
  level: string
  peopleCount: number[],
  duration: number
  translationKey: string | null
}

export interface IForm {
  name: string
  phone: string
  numberOfVisitors: number
  privateDataAgreement: boolean
}

export interface ISignUpForm {
  email: string
  password: string
  confirmPassword: string
}

export interface ISignInForm {
  email: string
  password: string
}

export type ValidFieldNames =
  | 'name'
  | 'phone'
  | 'numberOfVisitors'
  | 'privateDataAgreement'
  | 'password'
  | 'confirmPassword'
  | 'email';

export interface IOrder {
  name: string
  peopleCount: number
  phone: string
  isLegal: boolean
}

export interface IUser {
  email: string
  password: string
}

export interface ILangOption {
  value: string
  label: string
}
