import EditableShoppingList from './components/EditableShoppingList'

//const currentRoute = 'shoppingList'

export default function App() {
  return (
    <div style={styles.container}>
      <EditableShoppingList id='test'/>
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
