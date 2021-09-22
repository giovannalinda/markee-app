import logo from 'assets/images/markee-logo.svg'
import * as S from 'components/sidebar/sidebar.styles'
import { AiOutlinePlus } from 'react-icons/ai'
import { File } from 'components/sidebar/sidebar.types'

const files: File[] = [
  {
    id: '0',
    name: 'README.md',
    content: 'Conteúdo do README',
    active: false,
    status: 'saved',
  },
  {
    id: '1',
    name: 'CONTRIBUTING.md',
    content: 'Conteúdo do Contributing',
    active: true,
    status: 'editing',
  },
]

export function Sidebar () {
  return (
    <S.Aside>
      <header>
        <S.Image src={logo} alt='logo' />
      </header>

      <h2>
        <span>Arquivos</span>
      </h2>

      <S.Button>
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
