import React from 'react'
import cn from 'classnames'

import './custom.css'
import s from './App.modules.scss'

import './index.css'

const App = () => {
  return (
    <div className={cn(s.header, ' color')}>
      Hi, this is App Component!
    </div>
  )
}

export default App;