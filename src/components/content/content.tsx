import { FiFileText } from 'react-icons/fi'
import * as S from './content.styled'

export function Content () {
  return (
    <S.Container>
      <S.TypeArea>

        <S.InputArea>
          <FiFileText size={24} />
          <input
            placeholder='Nome do arquivo'
            autoFocus
          />
        </S.InputArea>

        <textarea
          placeholder='Digite seu conteúdo aqui'
        />
      </S.TypeArea>

      <S.Separator />

      <S.MarkdownSide>
        <h1>Bootcamp Brainn Co.</h1>
        <p>Lorem ipsum dolor</p>
        <S.MarkdownSide />
      </S.MarkdownSide>

    </S.Container>
  )
}