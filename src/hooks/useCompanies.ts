import { useState, useEffect, useCallback } from "react";
import { useSanity } from "../providers/SanityProvider";
import { getListingCompaniesQuery, getListingCompany } from "../queries/Company";
import { SanityListingCompany } from "../types/Company";

function useCompanies() {
  const { client } = useSanity();
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<SanityListingCompany[]>([]);

  const fetchCompanies = useCallback(async (currentPage: number) => {
    setIsLoading(true);
    const data = await client?.fetch<SanityListingCompany[]>(getListingCompaniesQuery(currentPage, 10));
    const newData = data || [];
    const newCompanies = [...companies, ...newData].flat();
    setCompanies(newCompanies);
    setIsLoading(false);
  }, []);

  const fetchCompany = useCallback(async (id: string) => {
    setIsLoading(true);
    const data = await client?.fetch<SanityListingCompany>(getListingCompany(id));
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
