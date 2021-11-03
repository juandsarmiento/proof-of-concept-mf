import React from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'

import { App as AdsApp, mount } from 'ads/AdsApp'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'
import ReferencesApp from './References'
import { ROUTES } from '../types/routes'

const Layout = () => {
  const history = useHistory()
  const routes: {
    key: string
    title: string
    icon: string
    path: string
    active: boolean
  }[] = ROUTES.map((item) => ({ ...item, active: false }))
  const handleChangeUrl = (path: string) => {
    history.push(path)
  }
  return (
    <main className='fixed top-0 right-0 bottom-0 left-0'>
      <div className='flex flex-col w-full h-full'>
        <header>
          <Header userName='Pepito Perez' />
        </header>
        <main className='flex-grow flex'>
          <section>
            <SideMenu items={routes} onChangeRoute={handleChangeUrl} />
          </section>
          <section className='flex-grow'>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/ads' />
              </Route>
              <Route path='/ads' component={AdsApp} />
              <Route path='/references' component={ReferencesApp} />
              <Route>404 Not Found</Route>
            </Switch>
          </section>
        </main>
      </div>
    </main>
  )
}

export default Layout
