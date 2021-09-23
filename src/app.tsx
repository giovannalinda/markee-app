import { useState, useRef, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { File } from 'components/sidebar/sidebar.types'
import { Sidebar } from 'components/sidebar/sidebar'
import { Content } from 'components/content/content'
import styled from 'styled-components/macro'

export function App () {
  const [files, setFiles] = useState<File[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  function createNewFile () {
    inputRef.current?.focus()
    setFiles(files.map(file => ({
      ...file,
      active: false,
    }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const updateFileName = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          name: e.target.value,
          status: 'editing',
        }
      }

      return file
    }))
  }

  function handleDelete (id: string) {
    setFiles(files => files.filter(file => file.id !== id))
  }

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={createNewFile}
        onRemoveFile={handleDelete}
      />
      <Content
        inputRef={inputRef}
        onUpdateFileName={updateFileName}
        file={files.find(file => file.active)}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
