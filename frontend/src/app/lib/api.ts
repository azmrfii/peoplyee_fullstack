import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

export const getJobs = async (search: string) => {
  const res = await API.get("/jobs", { params: { search } });
  return res.data;
};

export const getJobById = async (id: string) => {
  const res = await API.get(`/jobs/${id}`);
  return res.data;
};