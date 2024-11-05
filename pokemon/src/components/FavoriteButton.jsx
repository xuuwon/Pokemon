import { useDispatch, useSelector } from "react-redux"
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteButton ({ pokemonId }) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch();

    return (
        <button 
            onClick={(e) => {
                e.stopPropagation();
                dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({pokemonId}) // 객체로 담기
                : favoriteSlice.actions.addToFavorite({pokemonId}))
            }} 
            className="ml-[5px]">
            {isFavorite ? '💖' : '🤍'}
        </button>
    )
}