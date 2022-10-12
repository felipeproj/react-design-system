
export function App() {

  return (
    <h1>Hello World!</h1>
  )
}

// Quando exportamos 'default' um componente permite que a classe que esta usando esse componente coloque o nome que quiser nele no momento do import
// Ex.: import TestApp from './App';  -- Exportando App como 'default' permite que o nome dele seja alterado durante o import
// export default App;
// Para manter a integridade do nome do coomponente devemos apenas exportá-los, sem utilizar 'default'
