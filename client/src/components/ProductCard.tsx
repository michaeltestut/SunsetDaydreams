import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard({product}: {product: Product}){
    return(
        <StyledContainer>
            <div className='item-card'>
                <Link to={`/product/${product.url_slug}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                </Link>
            </div>
            <Card.Body>
                <Link className="link" to={`/product/${product.url_slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text>${product.price}</Card.Text>
                <div className='centered'>
                    {product.countInStock === 0 ?(
                        <Button variant="light" disabled>Out of Stock</Button>
                    ):(
                        <Button variant="outline-dark">Add to cart</Button>
                    )}
                </div>
            </Card.Body>
        </StyledContainer>
    )

}

const StyledContainer=styled.div`
.item-card{
    padding:5px;
    border:2px solid lightgrey;
    &:hover{
        border:2px solid pink;
    }
}
.link{
    color:black;
    &:hover{
        opacity:.8;
    }
   }
    .centered{
        text-align:center;
    }
`