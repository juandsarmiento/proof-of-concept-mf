import React, { useState } from 'react'
import { Header } from 'chiper-sb-admin'

export interface HeaderProps {
  userName: string
}

const HeaderWrapper = (props: HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const toggleMenu = () => setMenuIsOpen((oldValue) => !oldValue)
  return (
    <div>
      <Header
        profileName={props.userName}
        onClickMenu={toggleMenu}
        handleClickProfile={() => {}}
      ></Header>
    </div>
  )
}

export default HeaderWrapper
