import './App.css';
import Mensaje from './Mensaje'

// Component
// const Mensaje = () => {
//   return <h1> Hello World </h1>
// }

const App = ()=> {
  const message1 = 'Hello World from a constant '
  const a = 3
  const b = 5
  return (
    // <> Fragment sintax
    <div className="App">
      <Mensaje message="Working on a React.js course" color="green"/>
      <strong>We're working on it </strong>
      <br/>
      {message1 + 'evaluacion'}
      <br />
      { a + b}
      <br />
      {+new Date() }
    </div>
    // <> Fragment sintax
  );
}

export default App;

/*
En react no podemos mostrar objetos directamente en JSX para eso necesitamos hacerlo un timeStamp
{+new Date() } Ok
{new Date() } Bad
*/