import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

import win from './assets/icons/win.svg'
import DatabaseTest from './DatabaseTest'
import WelcomePage from './WelcomePage'


function App(): JSX.Element {
  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div> */}
      {/* <DatabaseTest /> */}
      <img alt="logo" className="logo" src={win} />
      <WelcomePage />
      <Versions></Versions>
    </>
  )
}

export default App
