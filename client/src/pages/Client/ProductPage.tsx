import React, { useState } from "react";
import { useGetOneProductQuery } from "../../redux/product/productSlice.ts";
import { useParams, useNavigate } from "react-router";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { getError } from "../../utils";
import { ApiError } from "../../types/ApiError";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import MetaData from "../../components/MetaData";
import { addToCart } from "../../redux/cart/cartSlice.ts";
import { useAppDispatch } from "../../redux/hooks.ts";



export default function ProductPage() {
  const { url_slug } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    error,
    //@ts-ignore
  } = useGetOneProductQuery(url_slug);

  const [mainImage, setMainImage] = useState<string>("");
  const [qty, setQty] = useState<Number>(1)

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');

  }

  return (
    <div>
      {isLoading && <LoadingBox />}
      {error && (
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      )}
      {!product && <MessageBox variant="danger">Product Not Found</MessageBox>}
      {product && (

        <StyledContainer>
          <MetaData title={product!.name} />
          <div className="images">
            {mainImage === "" ? (
              <img className="main-image" src={product.images[0]} />
            ) : (
              <img className="main-image" src={mainImage} />
            )}
            <div className="secondary-images">
              {product && product.images.map((image) => (
                <div onMouseEnter={() => setMainImage(image)}>
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
              <>
                <Form.Group>
                  <Form.Label>Select Quantity</Form.Label>
                  <Form.Control
                    as="select"
                    value={Number(qty)}
                    onChange={(e) => setQty(Number(e.target.value))}>
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button
                  variant="outline-dark"
                  className="btn"
                  onClick={addToCartHandler}>
                  Add to Bag
                </Button>
              </>
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
