import React from 'react'
import styled from 'styled-components'

const NumbersSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 10px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(90deg, rgba(82,82,228,1) 20%, rgba(0,212,255,1) 100%);
    justify-content: space-between;
    background: linear-gradient(0deg, rgba(255,209,0,1) 20%, orange 100%);
    align-items: center;
`

function NumbersSelected() {
    return (
        <NumbersSelectedContainer>
            <h3>Numbers Selected</h3>
            <h3>Total: 0</h3>
        </NumbersSelectedContainer>
    )
}

export default NumbersSelected
