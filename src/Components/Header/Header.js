import arrow from "../../images/icons/curve_left_arrow.png";
import folder from "../../images/icons/folder.jpg";
import pencil from "../../images/icons/pencil.png";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.subHeader}>
        <div className={style.logoContainer}>
          <a className={style.logo} href="#home" >NDV</a>
          <p className={style.logoSub}>NEW DEWELOPMENT VBCN</p>
        </div>
        <div className={style.nav}>
          <ul className={style.navLink}>
            <li className={style.navItem}>
              <a href="#home">О нас</a>
            </li>
            <li className={style.navItem}>
              <a href="#home">Наши услуги</a>
            </li>
            <li className={style.navItem}>
              <a href="/home">Контакты</a>
            </li>
            <li className={style.navItem}>
              <a href="#home">Форум</a>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <div className={style.rightUp}>
            <a className={style.rightRus} href="#home">Рус</a>
            <a className={style.rightUzb} href="#home">Узб</a>
            <input className={style.rightInput} placeholder="поиск"></input>
            <img className={style.rightImg} src={arrow} alt="arrowPointer" width="20px" />
          </div>
          <div className={style.rightDown}>
            <img src={folder} alt="iconBag" width="16px" />
            <a className={style.rightCabinet} href="#home">Персональный кабинет</a>
            <img src={pencil} alt="iconPencil" width="14px" />
            <a className={style.rightLogin} href="#home">Регистрация</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
