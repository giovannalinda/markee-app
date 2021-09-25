import styled, { css } from 'styled-components/macro'
import { StatusIcon, StatusIconProps } from './status.icon'
import * as icon from 'assets/icons'

export const Image = styled.img`
  display: flex;
  margin: auto;
  margin-top: 30px;
`

export const Aside = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
  overflow: hidden;
  min-width: 333px;
  max-width: 333px;

  h2 {
    color: ${theme.colors.white};
    font-size: 16px;
    margin: 40px 0 32px;
    position: relative;
    padding-left: 20px;

    span {
      background: ${theme.colors.black};
      position: relative;
      padding: 0 10px;
      border-radius: 6px;
    }

    &::before {
      background: ${theme.colors.primary};
      border-radius: 4px;
      content: '';
      height: 4px;
      left: 0;
      position: absolute;
      top: 9px;
      width: 100%;
      z-index: 0;
    }
  }
`}`

export const ButtonNewFile = styled.button`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${theme.colors.black};
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px 0;
  width: 100%;
  height: 40px;

  & svg {
    margin-right: 12px;
  }
  &:hover {
    opacity: 90%;
    transition: opacity 0.3s;
  }
`}`

export const LogoLink = styled.a`
  display: block;
`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const Button = styled(DefaultButton)`${({ theme }) => css`
  align-items: center;
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 4px;
  color: ${theme.colors.lightBlack};
  display: flex;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 32px;
  padding: 8px 0;
  transition: 0.15s;
  width: 100%;

  & svg {
    margin-right: 12px;
  }

  &:hover {
   opacity: 80%;
  }
`}`

export const FileList = styled.ul`
  list-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const StatusIconStyled = styled(StatusIcon)<StatusIconProps>`${({ status, theme }) => css`
  position: absolute;
  right: 12px;
  color: ${theme.colors.primary};
  top: 50%;
  margin-top: ${status === 'saving' ? -5 : 0}px;
  transform: translateY(-50%);
`}`

export const RemoveButton = styled(DefaultButton)`${({ theme }) => css`
  background: transparent;
  border: 0;
  display: none;
  position: absolute;
  right: 12px;
  top: -3px;
  width: 12px;

  & svg {
    width: 14px;
    height: 14px;
    color: ${theme.colors.white};
    margin: 20px 0 0 0;
  }
`}`

export const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
`

type FileItemLinkProps = {
  active: boolean
}

export const FileItemLink = styled.a<FileItemLinkProps>`${({ active, theme }) => css`
  background: url("${active ? icon.FileActiveUrl : icon.FileUrl}") 10px calc(50% - 2px) no-repeat;
  align-items: center;
  border-radius: 4px;
  color: ${theme.colors.white};
  display: flex;
  font-size: 16px;
  padding: 15px 32px;
  padding-left: 50px;
  text-decoration: none;
  margin-top: 5px;

  ${active && css`
    background-color: ${theme.colors.lightBlack};
  `}
`}`

export const FileListItem = styled.li`${({ theme }) => css`
  position: relative;

  &:hover {
    ${RemoveButton} {
      display: block;
    }

    ${FileItemLink} {
      background-color: ${theme.colors.lightBlack};
    }
  }
`}`
