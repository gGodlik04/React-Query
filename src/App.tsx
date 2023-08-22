import { Crypto } from './components/CryptoBlock/Crypto/crypto'
import { Users } from './components/UsersBlock/Users/Users/Users'
import styles from "./interface.module.sass"

function App() {


  return (
      <div className={styles.interfaceBlock}>
        <Crypto/>
        <Users/>
      </div>
  )
}

export default App
