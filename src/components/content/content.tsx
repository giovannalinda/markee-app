import { ChangeEvent, RefObject } from 'react'
import { FiFileText } from 'react-icons/fi'
import { File } from 'types/styled'
import * as S from './content.styled'
import marked from 'marked'
import 'highlight.js/styles/vs.css'

// promisse que atrasa o carregamento para depois do app
import('highlight.js').then(hljs => {
  const highlight = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && highlight.getLanguage(language)) {
        return highlight.highlight(code, { language }).value
      }
      return highlight.highlightAuto(code).value
    },
  })
})

// highlight.highlightAll()

type ContentProps = {
  file?: File
  inputRef: RefObject<HTMLInputElement>
  onUpdateFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Content ({
  inputRef,
  onUpdateFileName,
  file,
  onUpdateFileContent,
}: ContentProps) {
  if (!file) {
    return null
  }

  return (
    <S.Container>
      <S.TypeArea>

        <S.InputArea>
          <FiFileText size={24} />
          <input
            placeholder='Nome do arquivo'
            ref={inputRef}
            autoFocus
            onChange={onUpdateFileName(file.id)}
            value={file.name}
          />
        </S.InputArea>

        <textarea
          placeholder='Digite seu markdown aqui'
          value={file.content}
          onChange={onUpdateFileContent(file.id)}
        />
      </S.TypeArea>

      <S.Separator />

      <S.MarkdownSide dangerouslySetInnerHTML={{ __html: marked(file.content) }} />

    </S.Container>
  )
}
