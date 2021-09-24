import styled, { css } from 'styled-components/macro'

export const Container = styled.div`
  margin-left: 33px;
  display: flex;
`

export const TypeArea = styled.div`${({ theme }) => css`
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

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar {
      width: 10px;
      background:transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.white};
    }
  }
`}`

export const Separator = styled.div`
  height: 85vh;
  width: 2px;
  background: rgba(30, 41, 59, 0.12);
`

export const InputArea = styled.div`${({ theme }) => css`
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
    color: ${theme.colors.primary};
  }
`}`

export const MarkdownSide = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  font: 16px 'DM Sans', sans-serif;
  overflow-y: scroll;
  padding: 60px;
  height: 100vh;
  width: 600px;
  word-break: break-all;

  &::-webkit-scrollbar {
    width: 0;
  }
`
