import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/shared/layout/header/Header';
import { ThemeProviderEnum, themeVar } from '../variables/Shared'
import { Page404 } from '../pages/Page404'
import {AppContext} from '../contexts'

const HomePage = lazy(() => import('../pages/HomePage'))
const NftStakePage = lazy(() => import('../pages/NftStakePage'))
const CreatePoolPage = lazy(() => import('../pages/CreatePoolPage'))
const DashboardPage = lazy(() => import('../pages/DashboardPage'))
const CommunityPage = lazy(() => import('../pages/CommunityPage'))
const VotePage = lazy(() => import('../pages/VotePage'))
const NewProposalPage = lazy(() => import('../pages/NewProposalPage'))
const ProposalPage = lazy(() => import('../pages/ProposalPage'));
const TreasurePage = lazy(() => import('../pages/TreasurePage'));
const SignaturePage = lazy(() => import('../pages/SignaturePage'));

export default function Routes() {
  const [theme, setTheme] = useState({theme: localStorage.getItem('theme')})

  useEffect(() => {
    if (theme.theme === 'dark') {
      themeVar(ThemeProviderEnum.dark)
    } else {
      themeVar(ThemeProviderEnum.light)
    }
  }, [theme])

  return (    
      <Suspense fallback={<Header />}>
        <AppContext.Provider value={{theme, setTheme}}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/stake' exact component={NftStakePage} />
            <Route path='/pool' exact component={CreatePoolPage} />
            <Route path='/dashboard' exact component={DashboardPage} />
            <Route path='/community' exact component={CommunityPage} />
            <Route path='/vote' exact component={VotePage} />
            <Route path='/newproposal' exact component={NewProposalPage} />
            <Route path='/proposal/:id' exact component={ProposalPage} />
            <Route path='/treasury'  exact component={TreasurePage} />
            <Route path='/signature/:type'  exact component={SignaturePage} />
            <Route path='**' component={Page404} />
          </Switch>
        </AppContext.Provider>
      </Suspense>
  )
}
