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
}

export interface IDictionary {
  [key: string]: string
}

export interface IForm {
  name: string
  phone: string
  numberOfVisitors: number
  privateDataAgreement: boolean
}

export type ValidFieldNames =
  | 'name'
  | 'phone'
  | 'numberOfVisitors'
  | 'privateDataAgreement';

export interface IOrder {
  name: string
  peopleCount: number
  phone: string
  isLegal: boolean
}
