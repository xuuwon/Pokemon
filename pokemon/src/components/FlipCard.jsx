import { useState } from "react"
import styled from "styled-components"


const FlipImageContainer = styled.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: ${props => props.fliped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`

const FrontImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden; // 뒤집히면 안보이게
    position: absolute;
`

const BackImage = styled.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden; // 뒤집히면 안보이게
    transform: rotateY(180deg);
`

export default function FlipCard({front, back}) {
    const [fliped, setFliped] = useState(false)

    return (
        <>
            <FlipImageContainer fliped={fliped}>
                <FrontImage src={front}/>
                <BackImage src={back}/>
            </FlipImageContainer>
            <button onClick={() => setFliped(prev => !prev)}>뒤집기</button>
        </>
    )
}