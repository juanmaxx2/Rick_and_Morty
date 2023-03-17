import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect (()=>{
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = "f37a021a0160.606559fe5e66ad57e249";

        fetch (`${URL_BASE}/character/${detailId}?key=${KEY}`)
        .then((response) => response.json())
        .then(setCharacter);
    },[]);

    return (
        <div>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <img src={character.image} alt="" />
        </div>
    );
}

export default detail;