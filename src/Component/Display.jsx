import style from './Display.module.css'
function Display(props) {
  return <>
  <h1>calculator</h1>
  <input type="text" name="" value={props.valueInput} className={style.display} readOnly/>
  </>
}
export default Display