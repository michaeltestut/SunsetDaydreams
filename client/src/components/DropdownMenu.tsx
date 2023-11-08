import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function DropdownMenu() {
  return (
    <Container>
        <table>
            {/* <tr>
                <th><Link className='link' to='/'>All Men's</Link></th>
                <th><Link className='link' to='/'>All Women's</Link></th>
                <th><Link className='link' to='/'>All Accessories</Link></th>
                
            </tr> */}
            <tr>
                <td>option2</td>
                <td>option3</td>
                <td>option4</td>
            </tr>
            <tr>
                <td>option2</td>
                <td>option3</td>
                <td>option4</td>
            </tr>
            <tr>
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
        width:30vw;
        display;flex;
        tr{
            display:flex;
            justify-content:space-around;
        }
    }
    .link{
        color:white;
        opacity: 80%;
        &:hover{
            opacity:100%;
        }
    }

`