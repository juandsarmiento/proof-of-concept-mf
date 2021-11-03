import React from 'react'
import { useParams } from 'react-router'
import { TextField, Container } from 'chiper-sb-admin'

const Detail = () => {
  const { ean } = useParams()
  return (
    <Container>
      <div>
        <TextField label='Name' className='' value={ean} disabled />
        <TextField label='Description' value='Description' disabled />
        <TextField label='Packaging' value='Lata 400ml' disabled />
        <TextField label='Brand' value='Tierra Santa' disabled />
      </div>
    </Container>
  )
}

export default Detail
