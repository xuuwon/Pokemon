import { useSelector } from "react-redux"
import { selectFavoritePokemons } from "../RTK/selector"
import { Card } from "../components/Card"

export default function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons)

    return (
        <>
            {pokemon.map(el => { // map에는 리턴이 필요하다
                return (<Card key={el.id} pokemon={el} />)
            })}
        </>
    )
}