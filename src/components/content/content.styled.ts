import styled from 'styled-components/macro'

export const Container = styled.div`
  margin-left: 33px;
  display: flex;
`

export const TypeArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 100vh;
  width: 600px;

  textarea {
    height: 100%;
    border: 0;
    color: rgba(30, 41, 59, 0.86);
    font-size: 16px;
    background: transparent;
    margin-top: 43px;
    outline: none;
    resize: none;
  }
`

export const Separator = styled.div`
  height: 100vh;
  width: 2px;
  background: rgba(30, 41, 59, 0.12);
`

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  font: 16px 'Inconsolata', 'Courier New', Courier, monospace;

  input {
    border: 0;
    width: 100%;
    background: transparent;
    font-size: 16px;
    color: rgba(30, 41, 59, 0.86);
    margin-left: 16px;
    outline: none;
  }

  svg {
    color: var(--primary);
  }
`

export const MarkdownSide = styled.div`
  font: 16px 'DM Sans', sans-serif;
  background: transparent;
  display: flex;
  flex-direction: column;
  padding: 60px;
  height: 100vh;
  width: 500px;
`
