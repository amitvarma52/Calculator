import React from "react";
import style from "./ButtonsContainer.module.css";
import img1 from '../assets/img1.webp'
import img2 from '../assets/minus.webp'
import img3 from '../assets/plus.webp'
import img4 from '../assets/mul.png'
const ButtonsContainer = (props) => {
  let { buttons,handleClick } = props;
  return (
    <>
      <div className={style["btn-container"]}>
        {buttons.map((element) => (
          <button onClick={handleClick} className={style.button} key={element}>
            {element}
          </button>
        ))}
      </div>
      <img src={img1} className={style.img1}/>
      <img src={img2} className={style.img2}/>
      <img src={img3} className={style.img3}/>
      <img src={img4} className={style.img4}/>
    </>
  );
};

export default ButtonsContainer;
