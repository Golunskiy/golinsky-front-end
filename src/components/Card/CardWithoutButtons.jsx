import React from 'react'

function CardWithoutButtons({ name, imageUrl, price }) {

   return (
      <div className="card">

         <img width={133} height={112} src={imageUrl} alt="" />
         <p className='card__name'>{name}</p>

         <div className="card__footer">
            <div className="card__price-block">
               <span>ЦІНА:</span>
               <p>{price} грн.</p>
            </div>


         </div>
      </div>
   )
}

export default CardWithoutButtons