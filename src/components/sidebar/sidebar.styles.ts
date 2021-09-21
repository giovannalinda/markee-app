import styled from 'styled-components/macro'

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
  font-size: 1.4rem;
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

export const FileList = styled.ul`
  list-style: none;
`

export const ListItem = styled.li`
  cursor: pointer;
  color: var(--white);
  display: flex;
  font-size: 16px;
  line-height: 21px;
  opacity: 65%;
  height: 40px;
  transition: 0.3s;
  margin: 0 0 10px 0;

  :first-child {
    margin: 34px 0 10px 0;
  }

  svg {
    margin: 9px 0 0 14px ;
    height: 20px;
    width: 20px;
  }

  &:hover {
    transition: opacity 0.2s;
    opacity: 95%;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 6px;
  }
`

export const Link = styled.a`
  color: #fff;
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

  & svg {
    width: 14px;
    height: 14px;
    color: var(--white);
    margin: 15px 15px 0 0;
  }
`
