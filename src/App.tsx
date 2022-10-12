import './styles/global.css';

export function App() {

  return (
    <>
      <h1 className="font-bold text-2xl text-black">Hello World!</h1>

      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
    </>
  )
}

// Quando exportamos 'default' um componente permite que a classe que esta usando esse componente coloque o nome que quiser nele no momento do import
// Ex.: import TestApp from './App';  -- Exportando App como 'default' permite que o nome dele seja alterado durante o import
// export default App;
// Para manter a integridade do nome do coomponente devemos apenas exportá-los, sem utilizar 'default'
