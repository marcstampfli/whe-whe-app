import React from 'react'
import styled from 'styled-components'

const MoneyValueContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 150px;
    align-items: center;
`

const Money = styled.div`
    display: flex;
    font-size: 4rem;
    a {
        color: red;
    }
`

function MoneyValue() {
    return (
        <MoneyValueContainer>
            <Money><a href="/">$1</a></Money>
            <Money><a href="/">$5</a></Money>
            <Money><a href="/">$10</a></Money>
            <Money><a href="/">$20</a></Money>
        </MoneyValueContainer>
    )
}

export default MoneyValue
