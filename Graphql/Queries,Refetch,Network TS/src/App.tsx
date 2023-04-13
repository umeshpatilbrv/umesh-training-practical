import { useQuery, NetworkStatus } from "@apollo/client";
import { COUNTRY } from "./framework/graphql/country/Query";
import { CountryData, CountryVars } from "./framework/graphql/country/Query";
import React, { useState } from "react";
import DelayedQuery from "./component/UseLazyQuery";


// import AddTodo from "./component/UseMutation";


function App(): JSX.Element {
  const [code, setcode] = useState<string>("");
  const { data, loading, error, refetch, networkStatus } = useQuery<
    CountryData,
    CountryVars
  >(COUNTRY, {
    variables: { code },
    notifyOnNetworkStatusChange: true,
    pollInterval: 2000,
    skip: code.length !== 2,
  });

  if (networkStatus === NetworkStatus.refetch) return <div>Refetching!</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setcode(e.target.value);
  };

  return (
    <>
    <div className="App">
      {error}
      {!data || loading ? (
        <h1>Queries,Refetch,Network</h1>
      ) : (
        <h1>
          {data.country?.name} {data.country?.emoji}
        </h1>
      )}
      <input type="text" value={code} onChange={handleChange} />
      <button onClick={() => refetch({ code: "US" })}>Refetch</button>
    </div>
    <DelayedQuery />
    </>
  );
}

export default App;
