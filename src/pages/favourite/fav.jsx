
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromFavorites } from '../../store/slices/favoritesSlice'; // Import action
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './Empty-fav.css'; // Import your custom CSS file

// function Favorites() {
//   const dispatch = useDispatch();

//   // Access the favorite items from the Redux store
//   const favoriteItems = useSelector((state) => state.favorites.items);

//   // Handle removing an item from favorites
//   const handleRemoveFromFavorites = (id) => {
//     dispatch(removeFromFavorites(id));
//   };

//   const navigate = useNavigate(); // Initialize the navigate function
  
//   const handleGoShopping = () => {
//     navigate("/"); // Navigate to the main page (replace '/' with your main page route if different)
//   };

//   return (
//     <Container className="favorites-container">
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <h2>المنتجات المفضلة</h2>
//           <hr />
//           {favoriteItems.length === 0 ? (
//             <>
//               <p className="favorites-message">المنتجات المفضلة الخاصة بك فارغة.</p>
//               <Button variant="primary" className="btn-shop" onClick={handleGoShopping}>
//                 اذهب للتسوق
//               </Button>
//             </>
//           ) : (
//             <>
//               {favoriteItems.map((item) => (
//                 <Card key={item.id} className="mb-3">
//                   <Row className="align-items-center p-3">
//                     <Col xs={4}>
//                       <Card.Img
//                         src={item.thumbnail}
//                         alt={item.title}
//                         style={{ width: '100%', height: 'auto' }}
//                       />
//                     </Col>
//                     <Col xs={6}>
//                       <Card.Body>
//                         <Card.Title>{item.title}</Card.Title>
//                         <Card.Text>EGP {item.price}</Card.Text>
//                       </Card.Body>
//                     </Col>
//                     <Col xs={2} className="text-end">
//                       <Button
//                         variant="danger"
//                         onClick={() => handleRemoveFromFavorites(item.id)}
//                       >
//                         إزالة
//                       </Button>
//                     </Col>
//                   </Row>
//                 </Card>
//               ))}
//             </>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Favorites;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/slices/favoritesSlice'; // Import action
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Favorites() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);

  const handleRemoveFromFavorites = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <Container className="favorites-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>المنتجات المفضلة</h2>
          <hr />
          {favoriteItems.length === 0 ? (
            <p className="favorites-message">لا توجد منتجات مفضلة</p>
          ) : (
            
            favoriteItems.map((item) => (
              <Card key={item.id} className="mb-3">
                <Row className="align-items-center p-3">
                  <Col xs={4}>
                    <Card.Img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: 'auto' }} />
                  </Col>
                  <Col xs={6}>
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>EGP {item.price}</Card.Text>
                    </Card.Body>
                  </Col>
                  <Col xs={2} className="text-end">
                    <Button variant="danger" onClick={() => handleRemoveFromFavorites(item.id)}>
                      إزالة
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Favorites;
