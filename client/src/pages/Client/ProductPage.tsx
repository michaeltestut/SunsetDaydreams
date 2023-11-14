import React from "react";
import { useGetOneProductQuery } from "../../redux/api/apiSlice";
import { useParams } from "react-router";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import { getError } from "../../utils";
import { ApiError } from "../../types/ApiError";

export default function ProductPage() {
  const {url_slug}  = useParams();
 
  //@ts-ignore
  const {data:product,isLoading, error} = useGetOneProductQuery(url_slug);

  return (
    <div>
      {isLoading && <LoadingBox/>}
      {error &&
        <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
      }
      {!product && <MessageBox variant="danger">Product Not Found</MessageBox>
}
    {product && 
    <div>

      <h1>{product.name}</h1>
      <img src={product.images[0]}/>
    </div>

    
    }
    </div>
  ) 
}
