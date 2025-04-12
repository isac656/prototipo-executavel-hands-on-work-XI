import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100px',
};

const MapaDestino = ({ endereco }) => {
  const [coordenadas, setCoordenadas] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: '', // 🔑 coloque sua API Key aqui
    libraries: ['places'],
  });

  useEffect(() => {
    const geocodificarEndereco = async () => {
      if (!isLoaded || !endereco) return;

      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: endereco }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          setCoordenadas({ lat: location.lat(), lng: location.lng() });
        } else {
          console.error('Erro ao geocodificar endereço:', status);
        }
      });
    };

    geocodificarEndereco();
  }, [isLoaded, endereco]);

  return isLoaded && coordenadas ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordenadas}
      zoom={15}
    >
      <Marker position={coordenadas} />
    </GoogleMap>
  ) : (
    <p>Carregando mapa...</p>
  );
};

export default MapaDestino;

