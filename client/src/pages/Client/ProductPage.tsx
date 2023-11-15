import React, { useState } from "react";
import { useGetOneProductQuery } from "../../redux/api/apiSlice";
import { useParams } from "react-router";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { getError } from "../../utils";
import { ApiError } from "../../types/ApiError";
import styled from "styled-components";
import { Button } from "react-bootstrap";

export default function ProductPage() {
  const { url_slug } = useParams();

  const {
    data: product,
    isLoading,
    error,
    //@ts-ignore
  } = useGetOneProductQuery(url_slug);

  const [isMainImage, setIsMainImage] = useState<string>("");

  return (
    <div>
      {isLoading && <LoadingBox />}
      {error && (
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      )}
      {!product && <MessageBox variant="danger">Product Not Found</MessageBox>}
      {product && (
        <StyledContainer>
          <div className="images">
            {isMainImage === "" ? (
              <img className="main-image" src={product.images[0]} />
            ) : (
              <img className="main-image" src={isMainImage} />
            )}
            <div className="secondary-images">
              {product && product.images.map((image) => (
                <div onMouseEnter={()=>setIsMainImage(image)}>
                  <img className="secondary" src={image} />
                </div>
              ))}
            </div>
          </div>
          <div className="productDetails">
            <div className="details">
              <h1 className="name">{product.name}</h1>
              <h5 className="price">${product.price}</h5>
              <p className="description">{product.description}</p>
            </div>
            {product.countInStock > 0 ? (
              <Button variant="outline-dark" className="btn">
                Add to Bag
              </Button>
            ) : (
              <Button variant="outline-dark" className="btn" disabled>
                Out of Stock
              </Button>
            )}
          </div>
        </StyledContainer>
      )}
    </div>
  );
}

const StyledContainer = styled.div`
  padding: 5em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .main-image {
    height: 40em;
    border: 2px solid rgba(12, 12, 12, 0.05);
  }
  .secondary-images{
    display:flex;
  }
  .secondary {
    width: 10em;
    margin:10px;
  }
  .productDetails {
    // background-color:purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    .btn {
      margin: 50px;
    }
  }
`;
