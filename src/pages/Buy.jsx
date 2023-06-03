import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardWithoutButtons from "../components/Card/CardWithoutButtons";
import NamePage from "../components/NamePage";

const arrowIcon = "https://res.cloudinary.com/dw0qzruxp/image/upload/v1685200333/arrow_rx2wu2.svg";

function Buy() {
  const bought = useSelector((state) => state.cart.bought);

  return (
    <div>
      <NamePage>Мої покупки</NamePage>
      {bought.length > 0 ? (
        <div className="sneakers justify-content-center">
          {bought.map((obj) => (
            <CardWithoutButtons name={obj.name} imageUrl={obj.imageUrl} price={obj.price} />
          ))}
        </div>
      ) : (
        <div className="sneakers-empty">
          <p className="sneakers-empty__emoji">😔</p>
          <h2>У вас немає покупок</h2>
          <p className="sneakers-empty__text">
            Ви скупердяй?
            <br />
            Оформіть хоча б одне замовлення.
          </p>
          <NavLink to="/">
            <button className="button-back">
              <span>Повернутись назад</span>
              <img src={arrowIcon} alt="" />
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Buy;
