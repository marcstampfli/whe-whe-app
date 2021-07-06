import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(82,82,228);
    background: linear-gradient(90deg, rgba(82,82,228,1) 20%, rgba(0,212,255,1) 100%);
    h1 {
        color: yellow;
        font-size: 6rem;
        font-weight: 700;
        margin: 40px 0;
        text-shadow: 1px 1px 1px #000;
    }
`

function Header() {
    return (
        <Title>
            <h1>WHE WHE on D' Avenue</h1>
        </Title>
    )
}

export default Header
