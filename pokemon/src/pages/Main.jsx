import { useSelector } from "react-redux"
import { Card } from "../components/Card"

export default function Main() {
    const pokemonData = useSelector(state => state.pokemon.data)

    return (
        <>
            {pokemonData.map(el => { // map에는 리턴이 필요하다
                return (<Card key={el.id} pokemon={el}/>)
            })}

        </>
    )
}