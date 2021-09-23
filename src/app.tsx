import { useRef } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'components/sidebar/sidebar'
import { Content } from 'components/content/content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <Main>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
