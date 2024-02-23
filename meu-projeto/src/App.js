import './App.css';

function App() {

  const name = 'Jet Lee'
  const newName = name.toLocaleUpperCase()

  function soma(a, b){
    return a + b;
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Ola {newName}</p>
      <p>soma: {soma(2, 2)}</p>
      <img src = {url} alt = "Minha imagem" />
    </div>
  );
}

export default App;
