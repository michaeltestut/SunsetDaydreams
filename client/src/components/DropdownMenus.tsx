
import styled from 'styled-components'

function DropdownMenu_Mens() {
    return (
        <Container>
            <p className='link'>Option</p>
            <p className='link'>Option</p>
            <p className='link'>Option</p>
            <p className='link'>Option</p>
            <p className='link'>Option</p>
            <p className='link'>Option</p>

        </Container>
    )
}
function DropdownMenu_Womens() {
    return (
        <Container>
            <div>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
            </div>
        </Container>
    )
}
function DropdownMenu_Accessories() {
    return (
        <Container>
            <div>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
                <p className='link'>Option</p>
            </div>
        </Container>
    )
}

export { DropdownMenu_Mens, DropdownMenu_Womens, DropdownMenu_Accessories }

const Container = styled.div`
    width:100%;
    text-align:center;
    .link{
        color:white;
        opacity: 80%;
        &:hover{
            opacity:100%;
        }
    }

`