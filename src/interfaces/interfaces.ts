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
  peopleCount: [ number, number ],
  duration: number
}

export interface IDictionary {
  [key: string]: string
}
