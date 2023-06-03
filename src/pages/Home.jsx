import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../components/Card/Card'
import CardLoader from '../components/Card/CardLoader'
import { fetchSneakers } from '../redux/actions/sneakers'

function Home({ items, onAddBuy, onAddLike, onDelBuy, onDelLike }) {
   const dispatch = useDispatch()
   const isLoaded = useSelector((state) => state.sneakers.isLoaded)
   const [searchName, setSearchName] = useState('')

   const typingName = (e) => {
      setSearchName(e.target.value)
   }


   React.useEffect(() => {
      dispatch(fetchSneakers())
   }, [])

   return (
      <div>
         <div className="search">
            <h1>Всі кросівки</h1>
            {isLoaded &&
               <div className="search__block">
                  <input
                     onChange={typingName}
                     type="text"
                     placeholder='Пошук...'
                     value={searchName}
                  />

                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z" stroke="#E4E4E4" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>}
         </div>
         <div className="sneakers">
            {isLoaded
               ? items.filter(items => items.name.toLowerCase().includes(searchName.toLowerCase()))
                  .map(obj =>
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
               : Array(12).fill(0).map((name, index) => <CardLoader key={index} />)
            }
         </div>
      </div>
   )
}

export default Home