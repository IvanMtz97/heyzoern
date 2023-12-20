import { useState, useEffect, useCallback } from "react";
import { useSanity } from "../providers/SanityProvider";
import { getListingCompaniesQuery, getListingCompany } from "../queries/Company";
import { SanityListingCompany } from "../types/Company";

function useCompanies() {
  const { client } = useSanity();
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<SanityListingCompany[]>([]);
  const [page, setPage] = useState(0);

  const fetchCompanies = useCallback(async () => {
    setIsLoading(true);
    const data = await client?.fetch<SanityListingCompany[]>(getListingCompaniesQuery(page, 10));
    setCompanies(data || []);
    setIsLoading(false);
  }, [page]);

  const fetchCompany = useCallback(async (id: string) => {
    setIsLoading(true);
    const data = await client?.fetch<SanityListingCompany>(getListingCompany(id));
    console.log("DATA", data);
    setIsLoading(false);
    if (Array.isArray(data)) {
      return data[0];
    }
    return null;
  }, []);

  return {
    companies,
    isLoading,
    fetchCompanies,
    fetchCompany,
  };
}

export default useCompanies;
