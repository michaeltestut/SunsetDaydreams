import { Button, Card } from "react-bootstrap";
import { Product } from "../types/Product";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <StyledContainer>
                <div className='img-card'>
                    <Link to={`/product/${product.url_slug}`}>
                        {isHovered && product.images[1] ? <img src={product.images[1]} className="card-img-top" alt={product.name} />
                            : <img src={product.images[0]} className="card-img-top" alt={product.name} />
                        }
                    </Link>
                </div>
                <div className="info-card">
                    <Link className="link" to={`/product/${product.url_slug}`}>
                        <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text>${product.price}</Card.Text>
                    <div className='centered'>
                        {product.countInStock === 0 ? (
                            <Button variant="light" disabled>Out of Stock</Button>
                        ) : (
                            <Button variant="outline-dark">Add to cart</Button>
                        )}
                    </div>
                </div>
            </StyledContainer>
        </div>
    )

}

const StyledContainer = styled.div`

&:hover{
    .img-card{
        border:none;
    }
    box-shadow: 5px 5px 10px 0px grey;
    border: 2px solid pink;
    border-radius: 0px 0px 10px 10px;
}
.img-card{
    padding:5px;
    border:2px solid rgba(12,12,12,.05);
    border-bottom:none;
    
}

.info-card{
    background-color: rgba(12,12,12,.05);
    
    border-top:none;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
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