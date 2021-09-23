import { useState, ChangeEvent, Ref } from 'react'
import { FiFileText } from 'react-icons/fi'
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
  inputRef: Ref<HTMLInputElement>
}

export function Content ({ inputRef }: ContentProps) {
  const [content, setContent] = useState('')

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)
  }

  return (
    <S.Container>
      <S.TypeArea>

        <S.InputArea>
          <FiFileText size={24} />
          <input
            placeholder='Nome do arquivo'
            ref={inputRef}
          />
        </S.InputArea>

        <textarea
          placeholder='Digite seu conteúdo aqui'
          value={content}
          onChange={handleChange}
        />
      </S.TypeArea>

      <S.Separator />

      <S.MarkdownSide dangerouslySetInnerHTML={{ __html: marked(content) }} />

    </S.Container>
  )
}
