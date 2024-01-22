import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Loader from './Skeleton';
import {HeartRating, TextRating } from './Icons';
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';


// const ApiDataCard = () => {
//   const [data, setData] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://dummyjson.com/products');
//         // console.log('API Response:', response.data);

//         if (Array.isArray(response.data.products)) {
//           setData(response.data.products);
//         } else {
//           console.error('Unexpected API response:', response.data);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleDoubleClick = (productId) => {
//     setSelectedCard(productId === selectedCard ? null : productId);
//   };

//   return (
//     <>
//     <Grid  style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
    
//       {data.length > 0 ? (
//         data.map((product) => (
//           //<container wrap="nowrap"> 
//             <Card
//             key={product.id}
//             sx={{
//               flex: '0 0 auto',
//               maxWidth: 280,
//               cursor: 'pointer',
//               marginTop: 10,
//               mt: 15
//             }}
//             onDoubleClick={() => handleDoubleClick(product.id)}
//           >
//              <CardMedia
//               sx={{ height: 150 }}
//               image={product.thumbnail}
//               alt={product.title}
//               title={product.title}
//              />
            
//             <CardContent>
//               <Typography display="flex" justifyContent="space-between" fontWeight='bold' color="black">
//                <span> Rs {product.price}</span>
//                <span><HeartRating></HeartRating></span>
//               </Typography>
//               <Typography variant="p" fontWeight="bolder" component="div">
//               {product.description}                                                                   
//               </Typography>
//               {selectedCard === product.id && (
//                 <>
//                   <Typography color="black">
//                     Rating: {product.rating}
//                   </Typography>
//                   <Typography color="black">
//                     Stock: {product.stock}
//                   </Typography>
//                   <Typography color="black">
//                     Brand: {product.brand}
//                   </Typography>
//                   <Typography color="black">
//                     Category: {product.category}
//                   </Typography>
//                   <Typography color="black">
//                     Description: 
//                   </Typography>
//                   <div>
//                    <MyCarousel images={product.images} />
//                  </div>
//                 </>
                
//               )}
//             </CardContent>
//           </Card>
//           //  </Grid>
//         ))
//       ) : (
//         <Loader></Loader>
//       )}
//       </Grid >
//     </>
//   );
// };



const ApiDataCard = () => {
  const [data, setData] = useState([]);
  // const [selectedCard, setSelectedCard] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        if (Array.isArray(response.data.products)) {
          setData(response.data.products);
        } else {
          console.error('Unexpected API response:', response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // const handleDoubleClick = (productId) => {
  //   setSelectedCard(productId === selectedCard ? null : productId);
  // };

  const handleOpenDialog = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      // Handle left arrow key
      // Implement logic to go to the previous image
      addEventListener('    ')
    } else if (event.key === 'ArrowRight') {
      // Handle right arrow key
      // Implement logic to go to the next image
    }
  };


  return (
    <>
      <Grid
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {data.length > 0 ? (
          data.map((product) => (
            <Card
              key={product.id}
              sx={{
                flex: '0 0 auto',
                maxWidth: 280,
                cursor: 'pointer',
                marginTop: 10,
                mt: 15,
              }}
              onDoubleClick={() => handleDoubleClick(product.id)}
              onClick={() => handleOpenDialog(product)}
            >
              <CardMedia
                sx={{ height: 150 }}
                image={product.thumbnail}
                alt={product.title}
                title={product.title}
              />

              <CardContent>
                <Typography
                  display="flex"
                  justifyContent="space-between"
                  fontWeight="bold"
                  color="black"
                >
                   Rs {product.price}
                  <span>
                    <HeartRating />
                  </span>
                </Typography>
                <Typography variant="body1" fontWeight="bolder" component="div">
                  {product.description}
                </Typography>
               
              </CardContent>
            </Card>
          ))
        ) : (
          <Loader></Loader>
        )}
      </Grid>
{/* Rating: {selectedProduct.rating} */}
      <Dialog
       open={openDialog} 
       onClose={handleCloseDialog}
       onKeyDown={handleKeyDown}>
        <DialogContent>
          {selectedProduct && (
            <>
              <div>
                <MyCarousel images={selectedProduct.images} />
              </div>
              <Typography color="black" fontWeight="bold">{selectedProduct.description} </Typography>
              <Typography color="black"><TextRating /> </Typography>
              <Typography color="black">Stock: {selectedProduct.stock}</Typography>
              <Typography color="black">Brand: {selectedProduct.brand}</Typography>
              <Typography color="black">Category: {selectedProduct.category}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};





export default ApiDataCard;

const MyCarousel = ({ images }) => {
  return (
    <Carousel >
      {images.map((image, index) => (
        <div key={index} style={{height: 350, width: 500}}>
          <img src={image} alt={`Image ${index + 1}`}  />
        </div>
      ))}
    </Carousel>
  );
};






{/* {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  style={{ maxWidth: '25%', height: 'auto', marginTop: '10px' }}
                />
              ))} */}
