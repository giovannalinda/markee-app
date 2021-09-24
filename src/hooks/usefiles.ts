import { useEffect, useRef, useState, ChangeEvent, MouseEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { File } from '../types/type.file'
import localforage from 'localforage'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([{ id: uuidv4(), name: 'Sem titulo', content: '', active: true, status: 'saved' }])

  useEffect(() => {
    localforage.setItem('markdown editor', files)
  }, [files])

  useEffect(() => {
    const selectedFile = files.find(file => file.active === true)
    if (selectedFile) {
      window.history.replaceState(null, '', `/file/${selectedFile.id}`)
    }
  }, [files])

  useEffect(() => {
    async function getStorage () {
      const files = await localforage.getItem<File[]>('markdown editor')

      if (files) {
        setFiles(files)
      }
    }

    getStorage()
  }, [])

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

  return {
    files,
    inputRef,
    createNewFile,
    updateFileName,
    selectFile,
    updateFileContent,
    handleDelete,
  }
}
