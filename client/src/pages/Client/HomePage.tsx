import styled, { ThemeProvider } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard.tsx";
import MetaData from "../../components/MetaData.tsx";
import ErrorBox from "../../components/ErrorBox.tsx";
import { useEffect } from "react";
import { backgroundColor, buttonColor, textColor, buttonHover} from "../../components/Theme.tsx";
// import { useGetOneProductQuery, useGetProductsQuery } from "../../redux/api/apiSlice.ts";
import { useGetProductsQuery } from "../../redux/product/productSlice.ts";
import LoadingBox from "../../components/LoadingBox.tsx";



export default function HomePage() {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const result = useGetProductsQuery();

    return (
      <ThemeProvider theme={{theme:'light'}}>
        {result.isLoading && <LoadingBox/>}
        <StyledContainer>
          <MetaData title="Sunset Daydreams" />
          <Container className="mt-5">
            <Row>
              {result.error && <ErrorBox/>}
              {result.data && result.data.map((product) => (
                <Col className="myCard" key={product.url_slug} sm={6} md={4} lg={3}>
                  <ProductCard  product={product} />
                </Col>
              ))}
            </Row>
          </Container>
        </StyledContainer>
      </ThemeProvider>
    );
  }


const StyledContainer = styled.div`
  background-color: ${backgroundColor};
  color:${textColor};
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  text-align: left;
  .margin {
    margin-left: 20%;
  }
  h5{
    color:${textColor};
  }

  Button{
    background-color:${buttonColor};
    color:${textColor};
    &:hover{
      background-color:${buttonHover}
    }
  }

  
`;
