import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom"
import { selectPokemonByRegExp } from "../RTK/selector";
import { Card } from "../components/Card";

export default function Search() {
    const [searchParams] = useSearchParams(); // 쿼리 스트링 가져오기
    const param = searchParams.get('pokemon') // pokemon에 뭐가 들어왔니!
    const reg = getRegExp(param) // 정규식 생성 

    const pokemon = useSelector(selectPokemonByRegExp(reg))

    return (
        <>
            {pokemon.map(el => { // map에는 리턴이 필요하다
                return (<Card key={el.id} pokemon={el} />)
            })}
        </>
    )
}