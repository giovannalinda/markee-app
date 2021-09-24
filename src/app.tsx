import { useState, useRef, ChangeEvent, useEffect, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { File } from 'components/sidebar/sidebar.types'
import { Sidebar } from 'components/sidebar/sidebar'
import { Content } from 'components/content/content'
import styled from 'styled-components/macro'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      const file = files.find(file => file.active === true)

      if (!file || file.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(files => files.map(file => {
          if (file.active) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
          setFiles(files => files.map(file => {
            if (file.active) {
              return {
                ...file,
                status: 'saved',
              }
            }

            return file
          }))
        }, 300)
      }, 300)
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [files])

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

  const selectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()

    inputRef.current?.focus()

    setFiles(files => files.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const updateFileContent = (id: string) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFiles(files => files.map(file => {
      if (file.id === id) {
        return {
          ...file,
          content: event.target.value,
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
        onSelectFile={selectFile}
      />
      <Content
        inputRef={inputRef}
        onUpdateFileName={updateFileName}
        file={files.find(file => file.active)}
        onUpdateFileContent={updateFileContent}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
