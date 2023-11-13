import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard.tsx";
import MetaData from "../../components/MetaData.tsx";
import { useGetProductsQuery } from "../../redux/api/apiSlice.ts";



export default function HomePage() {
  const result = useGetProductsQuery();

  if(result.isUninitialized || result.isLoading){
    return <p>loading... please wait</p>
  }
  if(result.isError){
    return result.error
  }
    return (
      <StyledContainer>
        <MetaData title="Sunset Daydreams" />
        <Container className="mt-5">
          <Row>
            {result.data.map((product) => (
              <Col key={product.url_slug} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      </StyledContainer>
    );
  }


const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  text-align: left;
  .margin {
    margin-left: 20%;
  }
`;
