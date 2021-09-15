import styled, { css } from 'styled-components/macro'
import { ReactNode } from 'react'

export function App () {
  return (
  // <Title>Markee</Title>,
    <Title lala='a'>Markee</Title>
  )
}

type TitleProps = {
  children: ReactNode
  lala: string
}
/*
function Title ({ children }: TitleProps) {
  return <h1>{children}</h1>
}
*/

const Title = styled.h1<TitleProps>`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
`}`
