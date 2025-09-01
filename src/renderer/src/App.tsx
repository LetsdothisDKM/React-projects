import Versions from './components/Versions'

import win from './assets/icons/win.svg'
import WelcomePage from './WelcomePage'


function App(): JSX.Element {
  return (
    <>
      <img alt="logo" className="logo" src={win} />
      <WelcomePage />
      <Versions></Versions>
    </>
  )
}

export default App
