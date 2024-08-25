import { useEffect } from 'react';
import Swal from 'sweetalert2';

// Componente para mostrar una alerta cuando se agregan artículos al carrito
export const MyComponent = () => {
  useEffect(() => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Items added to cart!',
      showConfirmButton: true,
      timer: 5000 // Asegúrate de que el timer sea mayor que 500 ms
    });
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar

  return null;
};


