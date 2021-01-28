import useRouter from './hooks/useRouter'
import UiTree from './components/driven/UiTree'
import NavBar from './components/container/NavBar'
import { home } from './shared/constants/routes'

export default function App() {
  const {
    uiData,
    navigate,
  } = useRouter(home)

  return (
    <div style={styles.container}>
      <NavBar {...{ navigate }} />
      <UiTree {...{ uiData }} />
    </div>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
