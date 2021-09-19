import styled from 'styled-components/macro'

const Image = styled.img`
  display: flex;
  margin: auto;
`

const Aside = styled.aside`
  background: var(--black);
  padding: 32px;
  width: 332px;
`

const H2 = styled.h2`
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
`

const Button = styled.button`
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
    margin-right: 10px;
  }
`

const FileList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  cursor: pointer;
  color: var(--white);
  font-size: 16px;
  line-height: 21px;
  margin: 20px;
  opacity: 65%;
  padding: 0;

  svg {
    margin: 10px 16px 0 10px;
    height: 20px;
    width: 20px;
  }
`

export { Button, H2, Aside, Image, FileList, ListItem }
