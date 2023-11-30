import { useState, useCallback } from 'react';
import { useDropzone} from 'react-dropzone';
import { Form, Button } from 'react-bootstrap'
import StyledDropzone from '../../components/StyledDropzone';
import styled from 'styled-components';



export default function AddProduct() {
  const [preview, setPreview] = useState<string | ArrayBuffer | null>(null);

  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    const file = new FileReader;

    file.onload = function() {
      setPreview(file.result);
    }

    file.readAsDataURL(acceptedFiles[0])
  }, [])

  const { acceptedFiles } = useDropzone({
    onDrop,
  });

 


  async function handleSubmit(e:React.SyntheticEvent){
    e.preventDefault();

    if ( typeof acceptedFiles[0] === 'undefined' ) {
      console.log("error")
      // return;
    }

    const formData = new FormData();

    formData.append('file', acceptedFiles[0]);
    formData.append('upload_preset', 'product_images');
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY);

    const results =await fetch('https://api.cloudinary.com/v1_1/dz3mgdtgg/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    console.log('results', results);
    console.log(formData)
  }




  return (
    <StyledContainer>
      <h4> Add New Product</h4>
      <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control  type='text' placeholder='Enter Product Name'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control  type='number' placeholder='Enter Price'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
              <StyledDropzone/>
              {preview && (
            <div>
              <img src={preview as string} alt="Upload preview" />
            </div>
          )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type='textarea' as='textarea' placeholder='Enter Description'/>
          </Form.Group>
          <Form.Group>
            <Form.Label>In Stock</Form.Label>
            <Form.Control  type='number' placeholder='Enter Count In Stock'/>
          </Form.Group>
        <Button variant="primary" type="submit">
          Create Product
        </Button>
      </Form>

    </StyledContainer>
  )
}

const StyledContainer=styled.div`
  padding: 1.5em;
  margin: 1em;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;


`