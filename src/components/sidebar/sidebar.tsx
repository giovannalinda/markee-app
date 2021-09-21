import logo from 'assets/images/markee-logo.svg'
import * as S from 'components/sidebar/sidebar.styles'
import { AiOutlinePlus, AiOutlineFileText, AiOutlineClose } from 'react-icons/ai'
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
    name: 'LICENSE.md',
    content: 'Conteúdo do LICENSE.md',
    active: true,
    status: 'editing',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: 'Conteúdo do CONTRIBUTING.md',
    active: true,
    status: 'saving',
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

      <S.ButtonNewFile>
        <AiOutlinePlus />
        Adicionar arquivo
      </S.ButtonNewFile>

      <S.FileList>
        {files.map(file => (
          <S.ListItem key={file.id}>
            <AiOutlineFileText />
            <S.Link href={`/files/${file.name}`}>
              {file.name}
            </S.Link>
            <S.ButtonDelete><AiOutlineClose /></S.ButtonDelete>
          </S.ListItem>
        ))}
      </S.FileList>
    </S.Aside>

  )
}
