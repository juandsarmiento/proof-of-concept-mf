import React, { useEffect, useRef } from 'react'
import { mount, App as ReferenceApp } from 'references/ReferenceApp'

const ReferencesWrapper = () => {
  const ref = useRef(null)

  //   useEffect(() => {
  //     const el = ref.current
  //     if (el) mount(el)
  //     console.log(el)
  //   }, [])
  return (
    <div ref={ref} className='block'>
      <ReferenceApp />
    </div>
  )
}

export default ReferencesWrapper
