import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } from "@env";
import React, { createContext, useContext, useEffect, useState} from "react";
import { createClient, SanityClient } from '@sanity/client';

export type SanityContextState = {
  client: SanityClient | undefined;
};

export const SanityContext = createContext<SanityContextState>({
  client: undefined,
});

export const useSanity = () => useContext<SanityContextState>(SanityContext);

const SanityProvider = ({ children } : { children: React.ReactNode }) => {
  const { Provider } = SanityContext;
  const [client, setClient] = useState<SanityClient | undefined>(undefined);

  useEffect(() => {
    const config = {
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
    };
    let client = createClient(config);

    setClient(client);
  }, []);
  
  return (
    <Provider
      value={{
        client,
      }}
    >
      {children}
    </Provider>
  );
};

export default SanityProvider;
