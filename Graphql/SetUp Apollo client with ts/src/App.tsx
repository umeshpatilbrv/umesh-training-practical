
import './App.css';
// Import everything needed to use the `useQuery` hook
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from './framework/Graphql/location/Query';




function App() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }:any) => (
    <div key={id}>
      <h1>My first Apollo app </h1>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default App;
