import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../RTK/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

export default function Detail() {
    const { pokemonId } = useParams();
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)));

    console.log("선택된 포켓몬:", pokemonId);

    return (
        <div className="bg-white flex flex-col justify-center items-center border
        py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black">
            {pokemon ? (
                <>
                    <div className="text-[28px] mb-[10px]">
                        {pokemon.name}
                        <FavoriteButton pokemonId={Number(pokemonId)}/>
                    </div>
                    <div className="whitespace-pre-wrap text-center">{pokemon.discription}</div>
                    <FlipCard front={pokemon.front} back={pokemon.back}/>
                </>
            ) : (
                <div>포켓몬 데이터를 찾을 수 없습니다.</div>
            )}
        </div>
    );
}
