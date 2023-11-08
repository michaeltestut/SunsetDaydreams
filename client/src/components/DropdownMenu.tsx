import React from 'react'
import styled from 'styled-components'

export default function DropdownMenu() {
  return (
    <Container>
        <table>
            <tr>
                <th>header1</th>
                <th>header2</th>
                <th>header3</th>
                <th>header4</th>
            </tr>
            <tr>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td>option2</td>
                <td>option3</td>
                <td>option4</td>
            </tr>
            <tr>
                <td></td>
                <td>option2</td>
                <td>option3</td>
                <td>option4</td>
            </tr>
            <tr>
                <td></td>
                <td>option2</td>
                <td>option3</td>
                <td>option4</td>
            </tr>
        </table>
    </Container>
  )
}

const Container = styled.div`
    table{
        width:40vw;
        display;flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        
    }

`