import './App.css';
import TelaHome from './telas/Home';

const App = function() {
  return (
    <>
      <header className='Cabecalho'>
        Cabeçalho
      </header>
      <main className='Principal'>
        <TelaHome />
      </main>
      <footer className='Rodape'>
        Rodapé
      </footer>
    </>
  );
};

export default App;