import { File } from 'components/sidebar/sidebar.types'
import { AiOutlinePlus } from 'react-icons/ai'
import logo from 'assets/images/markee-logo.svg'
import * as S from 'components/sidebar/sidebar.styles'

type SidebarProps = {
  files: File[]
  onNewFile: () => void
  onRemoveFile: (id: string) => void
}

export function Sidebar ({
  files,
  onNewFile,
  onRemoveFile,
}: SidebarProps) {
  return (
    <S.Aside>
      <header>
        <S.Image src={logo} alt='logo' />
      </header>

      <h2>
        <span>Arquivos</span>
      </h2>

      <S.Button onClick={onNewFile}>
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
              <S.RemoveButton
                title={`Remover o arquivo ${file.name}`}
                onClick={() => onRemoveFile(file.id)}
              >
                <S.RemoveIcon />
              </S.RemoveButton>
            )}
          </S.FileListItem>
        ))}
      </S.FileList>
    </S.Aside>
  )
}
