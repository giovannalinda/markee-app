import logo from './markee-logo.png'
import { Button, H2, Aside, Image, FileList, ListItem } from 'sidebar/sidebar-styles'
import { AiOutlinePlus, AiOutlineFileText } from 'react-icons/ai'

export function Sidebar () {
  return (
    <Aside>
      <header>
        <Image src={logo} alt='logo' />
      </header>
      <H2>
        <span>Arquivos</span>
      </H2>
      <Button>
        <AiOutlinePlus />
        Adicionar arquivo
      </Button>
      <FileList>
        <ListItem>
          <AiOutlineFileText />
          README.md
        </ListItem>
        <ListItem>
          <AiOutlineFileText />
          README.md
        </ListItem>
        <ListItem>
          <AiOutlineFileText />
          README.md
        </ListItem>
        <ListItem>
          <AiOutlineFileText />
          README.md
        </ListItem>
      </FileList>
    </Aside>

  )
}
