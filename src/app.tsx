import styled from 'styled-components/macro'
import { Sidebar } from 'components/sidebar/sidebar'

export function App () {
  return (
    <Main>
      <Sidebar />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
