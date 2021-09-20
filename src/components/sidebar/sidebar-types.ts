type Status = 'editing' | 'saving' | 'saved'

type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

export type { Status, File }
