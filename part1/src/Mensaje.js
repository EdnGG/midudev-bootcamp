/* 
Component
A los componentes se le pueden llamar prametros pero en rect se le llaman PROPS
*/
const Mensaje = (props) => {
  return <h1 style={{ color: props.color }}> Hello World  from a module, {props.message}</h1>
}

export default Mensaje