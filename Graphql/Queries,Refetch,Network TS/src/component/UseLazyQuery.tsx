import { useState } from "react";

import { useLazyQuery } from "@apollo/client";
import {
  COUNTRY,
  CountryData,
  CountryVars,
} from "../framework/graphql/country/Query";

function DelayedQuery() {
  const [code] = useState<string>("");
  const [getCountry, { data, loading, error }] = useLazyQuery<
    CountryData,
    CountryVars
  >(COUNTRY, {
    variables: { code },
  });

  return (
    <div className="App">
      {error && <h1>{`You Broke It ${error.message}`}</h1>}
      {!data || loading ? (
        <h1>useLazyQuery</h1>
      ) : (
        <h1>
          {data.country?.name} {data.country?.emoji}
        </h1>
      )}
      <button onClick={() => getCountry({ variables: { code: "PK" } })}>
        Click
      </button>
    </div>
  );
}

export default DelayedQuery;
