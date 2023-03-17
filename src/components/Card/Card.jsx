import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addFavorite,deleteFavorite } from '../../redux/actions';
import { useEffect, useState } from "react";

function Card({id, name, species, gender, image, onClose, addFavorite, removeFavorite}) {
   
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites)

   const handleFavorite = () =>{
      if (isFav){
         setIsFav(false)
         removeFavorite(id)
      } else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose, addFavorite, removeFavorite});
      }
   }

   useEffect(()=>{
      myFavorites.forEach((fav) => {
         if (fav.id === id){
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.Carta}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
            <h2 className={style.name}>Name: {name}</h2>
         </Link>
         
         <img src={image} alt="" />
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
};

const mapDispatchToProps = (dispach) =>{
   return{
      addFavorite: (character) => {
         dispach(addFavorite(character))
      },
      deleteFavorite:(id) =>{
         dispach(deleteFavorite(id))
      },
   };
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(null, mapDispatchToProps)(Card);