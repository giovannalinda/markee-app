import { useState, RefObject } from 'react'
import logo from 'assets/images/markee-logo.svg'
import * as S from 'components/sidebar/sidebar.styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { File } from 'components/sidebar/sidebar.types'
import { v4 as uuidv4 } from 'uuid'

type SidebarProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Sidebar ({ inputRef }: SidebarProps) {
  const [files, setFiles] = useState<File[]>([])

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

  return (
    <S.Aside>
      <header>
        <S.Image src={logo} alt='logo' />
      </header>

      <h2>
        <span>Arquivos</span>
      </h2>

      <S.Button onClick={createNewFile}>
        <AiOutlinePlus />
        Adicionar arquivo
      </S.Button>

      <S.FileList>
        {files.map(file => (
          <S.FileListItem key={file.id}>
            <S.FileItemLink href={`/file/${file.name}`} active={file.active}>
              {file.name}
            </S.FileItemLink>

            {file.active && <S.StatusIconStyled status={file.status} />}

            {!file.active && (
              <S.RemoveButton title={`Remover o arquivo ${file.name}`}>
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.FileList>
    </S.Aside>
  )
}
