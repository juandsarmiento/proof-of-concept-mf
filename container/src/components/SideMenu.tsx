import React from 'react'
import { SideMenuItem } from 'chiper-sb-admin'

export interface SideMenuProps {
  onChangeRoute: (route: string) => void
  items: {
    key: string
    title: string
    icon: string
    path: string
    active: boolean
  }[]
}

const SideMenu = (props: SideMenuProps) => (
  <div className='h-full bg-gray-100 px-1'>
    {props.items.map((item) => (
      <SideMenuItem
        onClick={() => props.onChangeRoute(item.path)}
        key={item.key}
        title={item.title}
        icon={item.icon}
        active={false}
        extendible
        className='cursor-pointer'
      />
    ))}
  </div>
)

export default SideMenu
