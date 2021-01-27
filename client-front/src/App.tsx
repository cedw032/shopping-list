import useRouter from './shared/hooks/useRouter'
import RouteRenderer from './shared/components/RouteRenderer'
import NavBar from './shared/components/NavBar'

export default function App() {
  const {
    routeStructure,
    navigate
  } = useRouter('doubleList')

  return (
    <div style={styles.container}>
      <NavBar {...{navigate}}/>
      <RouteRenderer
        {...{ routeStructure }}
      />
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
