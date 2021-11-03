import React from 'react'
import StatusModal from '../components/StatusModal'

export interface StatusReferenceModalProps {
  isOpen: boolean
  initialStatus: string
  onClose: () => void
}
const StatusReferenceModal = (props: StatusReferenceModalProps) => {
  const options = [
    { label: 'active', value: 'active' },
    { label: 'inactive', value: 'inactive' },
    { label: 'suspended', value: 'suspended' },
  ]
  const handleClose = () => {
    props.onClose()
  }
  const handleClick = async () => {
    props.onClose()
  }
  return (
    <StatusModal
      isOpen={props.isOpen}
      statusOptions={options}
      activeOption={props.initialStatus}
      text='Reference Status'
      onClick={handleClick}
      onClose={handleClose}
    />
  )
}

export default StatusReferenceModal
