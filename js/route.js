import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Layout from './components/Layout.js'
import Statistic from './components/statisticscomponent/Statistic.js'
import Research from './components/researchcomponent/Research.js'
import Inputform from './components/inputcomponent/Inputform.js'
import Ppistarter from './components/ppistarter/Ppistarter.js'
import Faq from './components/faq/Faq.js'
import About from './components/about/Main.js'
import Notfound from './components/notfound/Notfound.js'
import Patientpost from './components/Patientpost.js'
import Pharmapost from './components/Pharmapost.js'
import Doctorpost from './components/Doctorpost.js'


export const Routing = () => (
      <Switch>
        <Route exact path='/' component={Notfound}/>
        <Route path='/posts' component={Layout}/>
        <Route path='/statistics' component={Statistic}/>
        <Route path='/research' component={Research}/>
        <Route path='/form' component={Inputform}/>
        <Route path='/tips' component={Ppistarter}/>
        <Route path='/faq' component={Faq}/>
        <Route path='/about' component={About}/>
        <Route component={Notfound} />
      </Switch>
  )
