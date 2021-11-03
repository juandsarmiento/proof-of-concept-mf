import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Table, Tr, Th, Container, Td } from 'chiper-sb-admin'

const List = () => {
  const data = [
    {
      id: 1,
      campaignName: 'campaignName',
      locationName: 'Bucaramanga',
      objective: 'objective',
      format: 'Format',
      schedule: '2020/10/03',
      status: 'active',
    },
    {
      id: 2,
      campaignName: 'campaignName',
      locationName: 'Bogotá',
      objective: 'objective',
      format: 'Format',
      schedule: '2020/10/03',
      status: 'active',
    },
  ]
  return (
    <Container>
      <Table>
        <thead>
          <Tr>
            <Th className='text-4 font-bold text-secondary-dark'>ID</Th>
            <Th className='text-4 font-bold text-secondary-dark'>
              Campaign name
            </Th>
            <Th className='text-4 font-bold text-secondary-dark'>Location</Th>
            <Th className='text-4 font-bold text-secondary-dark'>Objective</Th>
            <Th className='text-4 font-bold text-secondary-dark'>Format</Th>
            <Th className='text-4 font-bold text-secondary-dark'>Schedule</Th>
            <Th className='text-4 font-bold text-secondary-dark'>Status</Th>
          </Tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.campaignName}</Td>
              <Td>{item.locationName}</Td>
              <Td>{item.objective}</Td>
              <Td>{item.format}</Td>
              <Td>{item.schedule}</Td>
              <Td>{item.status}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default List
