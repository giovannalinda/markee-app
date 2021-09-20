import styled from 'styled-components/macro'

export const Image = styled.img`
  display: flex;
  margin: auto;
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
    }

    &::before {
      background: var(--primary);
      border-radius: 2px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      top: 9px;
      width: 100%;
      z-index: 0;
    }
  }
`

export const ButtonNewFile = styled.button`
  background: var(--primary);
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: var(--LightBlack);
  font-size: 13px;
  height: 34px;
  left: 32px;
  line-height: 18px;
  width: 100%;

  svg {
    margin: auto;
    margin: 0 10px 0 12px;
  }

  &:hover {
    opacity: 90%;
    transition: opacity 0.3s;
  }
`

export const FileList = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  cursor: pointer;
  color: var(--white);
  font-size: 16px;
  line-height: 21px;
  margin: 18px 0 0 0;
  opacity: 65%;
  padding: 0;
  height: 40px;

  svg {
    margin: 9px 0 0 14px ;
    height: 20px;
    width: 20px;
  }

  &:hover {
    transition: opacity 0.2s;
    opacity: 85%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
`

export const Link = styled.a`
  color: var(--white);
  text-decoration: none;
  padding: 9px 0 7px 16px;
`

export const ButtonDelete = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 270px;
  height: 20px;
  width: 20px;

  svg {
    width: 14px;
    height: 14px;
    color: var(--white);
    margin: 15px 15px 0 0;
  }
`
