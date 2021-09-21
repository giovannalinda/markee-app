import styled, { keyframes } from 'styled-components/macro'
import { Status } from './sidebar.types'
import { BsFillCircleFill, BsCheck } from 'react-icons/bs'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export type StatusIconProps = {
  status: Status
  className?: string
}

export function StatusIcon ({ status = 'saved', className }: StatusIconProps) {
  const Comp = {
    saving: Loading,
    saved: BsCheck,
    editing: Edit,
  }[status]

  return <Comp className={className} />
}

const Edit = styled(BsFillCircleFill)`
  margin-right: 2px;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Loading = styled(AiOutlineLoading3Quarters)`
  animation: ${rotation} 1s infinite linear;
`
