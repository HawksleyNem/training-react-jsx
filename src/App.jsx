import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/WrapperComponent'
import './components/NotificationComponent'
import { render } from 'react-dom'
import WrapperComponent from './components/WrapperComponent'
import NotificationComponent from './components/NotificationComponent'

function App() {
  return (
    <>
      <div className="columns">
        <div className="column">
          <WrapperComponent>
            <NotificationComponent
              content="Lorem ipsum dolor sit amet consectetur"
              type="is-danger"
            />
            <NotificationComponent
              content="Lorem ipsum dolor sit amet consectetur"
              type="is-success"
            />
            <NotificationComponent
              content="Lorem ipsum dolor sit amet consectetur"
              type="is-warning"
            />
          </WrapperComponent>
        </div>
      </div>
    </>
  )
}

export default App;