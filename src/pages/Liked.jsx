import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../components/Card/Card";
import NamePage from "../components/NamePage";

const arrowIcon = "https://res.cloudinary.com/dw0qzruxp/image/upload/v1685200333/arrow_rx2wu2.svg";

function Liked({ items, onAddBuy, onAddLike, onDelBuy, onDelLike }) {
  const liked = useSelector((state) => state.like.liked);

  return (
    <div>
      <NamePage>Мої закладки</NamePage>
      {liked.length > 0 ? (
        <div className="sneakers justify-content-center">
          {items.map(
            (obj) =>
              liked.includes(obj.id) && (
                <Card
                  key={obj.id}
                  id={obj.id}
                  name={obj.name}
                  imageUrl={obj.imageUrl}
                  price={obj.price}
                  onAddLike={onAddLike}
                  onAddBuy={onAddBuy}
                  onDelBuy={onDelBuy}
                  onDelLike={onDelLike}
                />
              )
          )}
        </div>
      ) : (
        <div className="sneakers-empty">
          <p className="sneakers-empty__emoji">😳</p>
          <h2>Закладок немає :(</h2>
          <p className="sneakers-empty__text">Ви нічого не додавали до закладок</p>
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

export default Liked;
