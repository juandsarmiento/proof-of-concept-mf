import React, { useState } from 'react'
import { Lightbox, Button, SwitchNav, ItemNav } from 'chiper-sb-admin'
import CircularProgress from '@material-ui/core/CircularProgress'

export interface StatusModalProps {
  isOpen: boolean
  text: string
  activeOption: string | number
  statusOptions: { label: string; value: string | number }[]
  onClose: () => void
  onClick: (newStatus: number | string) => Promise<unknown>
}

const StatusModal: React.FC<StatusModalProps> = (props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [activeOption, setActiveOption] = useState<number | string>(
    props.activeOption
  )
  const handleClick = async () => {
    setLoading(true)
    await props.onClick(activeOption)
    setLoading(false)
  }

  return (
    <>
      <Lightbox isOpen={props.isOpen} onClose={props.onClose}>
        <div className='flex flex-col mx-20 my-10'>
          <section className='flex flex-col justify-items-start items-start'>
            <h2 className='text-primary text-4xl font-black'>Modify Status</h2>
            <p className='text-secondary-dark font-bold text-xl mt-6'>
              {props.text}
            </p>
            <SwitchNav
              theme='primary'
              className='flex justify-center self-center my-6 w-full'
            >
              {props.statusOptions.length
                ? props.statusOptions.map((item) => (
                    <ItemNav
                      key={item.value}
                      type='submit'
                      className='w-full'
                      active={item.value === activeOption}
                      onClick={() => {
                        setActiveOption(item.value)
                      }}
                    >
                      {item.label}
                    </ItemNav>
                  ))
                : ''}
            </SwitchNav>
          </section>
          <section className='flex flex-wrap space-x-5 w-full justify-end mt-4'>
            <Button className='ml-1' theme='outline' onClick={props.onClose}>
              Cancel
            </Button>
            <Button
              disable={loading}
              onClick={() => handleClick()}
              className='ml-1 w-21'
            >
              {loading ? (
                <CircularProgress className='text-white-100' size={30} />
              ) : (
                'Save'
              )}
            </Button>
          </section>
        </div>
      </Lightbox>
    </>
  )
}

export default StatusModal
