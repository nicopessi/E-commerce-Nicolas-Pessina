import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';


export const ItemListContainer = ({ greeting }) => (
  <Container className='mt-4'>
    <h1>{greeting}</h1>
  </Container>
);

// Validación de las props
ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};