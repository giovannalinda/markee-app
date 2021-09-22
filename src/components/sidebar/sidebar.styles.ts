import styled, { css } from 'styled-components/macro'
import { StatusIcon, StatusIconProps } from './status.icon'
import * as icon from 'assets/icons'

export const Image = styled.img`
  display: flex;
  margin: auto;
  margin-top: 30px;
`

export const Aside = styled.aside`
  background: var(--black);
  padding: 32px;
  width: 332px;

  h2 {
    color: var(--white);
    font-size: 16px;
    margin: 40px 0 32px;
    position: relative;
    padding-left: 20px;

    span {
      background: var(--black);
      position: relative;
      padding: 0 10px;
      border-radius: 6px;
    }

    &::before {
      background: var(--primary);
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
`

export const ButtonNewFile = styled.button`
  align-items: center;
  background: var(--primary);
  border: 0;
  border-radius: 4px;
  color: var(--black);
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
`

export const LogoLink = styled.a`
  display: block;
`

const DefaultButton = styled.button`
  cursor: pointer;
`

export const Button = styled(DefaultButton)`
  align-items: center;
  background: var(--primary);
  border: 0;
  border-radius: 4px;
  color: var(--LightBlack);
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
`

export const FileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StatusIconStyled = styled(StatusIcon)<StatusIconProps>`${({ status }) => css`
  position: absolute;
  right: 12px;
  color: var(--primary);
  top: 50%;
  margin-top: ${status === 'saving' ? -5 : 0}px;
  transform: translateY(-50%);
`}`

export const RemoveButton = styled(DefaultButton)`
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
    color: var(--white);
    margin: 20px 0 0 0;
  }
`

export const RemoveIcon = styled(icon.Plus)`
  margin: 0;
  transform: rotate(45deg);
`

type FileItemLinkProps = {
  active: boolean
}

export const FileItemLink = styled.a<FileItemLinkProps>`${({ active }) => css`
  background: url("${active ? icon.FileActiveUrl : icon.FileUrl}") 10px calc(50% - 2px) no-repeat;
  align-items: center;
  border-radius: 4px;
  color: var(--white);
  display: flex;
  font-size: 1.6rem;
  padding: 15px 32px;
  padding-left: 50px;
  text-decoration: none;
  margin-top: 5px;


  ${active && css`
    background-color: var(--lightBlack);
  `}
`}`

export const FileListItem = styled.li`
  position: relative;

  :first-child {
  }

  &:hover {
    ${RemoveButton} {
      display: block;
    }

    ${FileItemLink} {
      background-color: var(--lightBlack);
    }
  }
`
