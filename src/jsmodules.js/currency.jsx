import { useState, useEffect }

const Currency = () => {
// Xample of the api response {
//   "compra": 61.55,
//   "venta": 63.14,
//   "variacion": -0.28,
//   "spread": 1.58,
//   "fecha": "2025-04-04 T18:00:00-04:00"
// }

      // This is where the data from the api will be stored
      const [data, setData] = useState({});

      // This is where the data will be fetched from the API. 
      // Here w're fetching an api that returns the data data from the dolar 💸 Exchange. 
      useEffect(() => {
        fetch('https://tropy-app-production.up.railway.app/scrape', {
          method: 'GET',
          mode: 'cors' // ⬅️ Asegura que se maneje como una solicitud CORS
        })
          .then((response) => response.json())
          .then(data => {
            setData(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
          }, []);
        
          const dateTime = {
            // This is where the date and time will be stored
            date: data.fecha?.split('T')[0],
            time: data.fecha?.split('T')[1]
          }

  return ( 
    <div>

    </div> 
  );
}

export default Currency;