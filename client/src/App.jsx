import { useState } from 'react';
import api from './api/axios';

function App() {
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const res = await api.get('/health', {
        headers: {},
      });

      setData(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <button onClick={getData}>here</button>
      <h1>{JSON.stringify(data)}</h1>
    </>
  );
}

export default App;
