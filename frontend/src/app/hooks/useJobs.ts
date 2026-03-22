import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../lib/api";

export const useJobs = (search: string) => {
  return useQuery({
    queryKey: ["jobs", search],
    queryFn: () => getJobs(search),
    staleTime: 1000 * 60,
  });
};