import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id

  return (
    <li className={s.item}>
      <NavLink to={path} className={({ isActive }) =>
        isActive ? s.active : undefined}> {props.name} </NavLink>
    </li>
  )
}

export default  DialogItem
