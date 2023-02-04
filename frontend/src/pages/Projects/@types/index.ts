export interface Project {
  id: string
  title: string
  zip_code: string
  cost: number
  done: boolean
  deadline: Date
  username?: string
}