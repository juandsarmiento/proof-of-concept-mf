import React from 'react'
import InfiniteScroll from 'react-infinite-scroller'
import { Link } from 'react-router-dom'
import { Table, Tr, Th, Container, Td } from 'chiper-sb-admin'
import StatusChips from 'chiper-sb-admin/dist/components/StatusChips'

const List = () => {
  const data = [
    {
      ean: 1231234443,
      referenceName: 'Mi referencia 1',
      packaging: 'Lata 400ml',
      brand: 'Tierra Santa',
      lastUpdate: '21/20/2020',
      macroCategory: 'Licores',
      status: 'active',
    },
    {
      ean: 335565436543,
      referenceName: 'Mi referencia 2',
      packaging: 'Bolsa 250g',
      brand: 'Pringles',
      lastUpdate: '21/20/2020',
      macroCategory: 'Enlatados',
      status: 'active',
    },
    {
      ean: 35654755634,
      referenceName: 'Mi referencia 3',
      packaging: 'Empaque 24uds',
      brand: 'Gillete prestobarba',
      lastUpdate: 'Format',
      macroCategory: 'Cuidado Personal',
      status: 'active',
    },
  ]
  return (
    <Container>
      <Table>
        <Tr>
          <Th className='text-4 font-bold text-secondary-dark'>Ean</Th>
          <Th className='text-4 font-bold text-secondary-dark'>Description</Th>
          <Th className='text-4 font-bold text-secondary-dark'>Packaging</Th>
          <Th className='text-4 font-bold text-secondary-dark'>Brand</Th>
          <Th className='text-4 font-bold text-secondary-dark'>Last Update</Th>
          <Th className='text-4 font-bold text-secondary-dark'>
            Macro Category
          </Th>
          <Th className='text-4 font-bold text-secondary-dark'>Status</Th>
        </Tr>
        {data.map((item) => (
          <Tr key={item.ean}>
            <Td>
              <Link to={`references/${item.ean}`}>{item.ean}</Link>
            </Td>
            <Td>{item.referenceName}</Td>
            <Td>{item.packaging}</Td>
            <Td>{item.brand}</Td>
            <Td>{item.lastUpdate}</Td>
            <Td>{item.macroCategory}</Td>

            <Td>
              <StatusChips status={item.status as any} title={item.status} />
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  )
}

export default List
