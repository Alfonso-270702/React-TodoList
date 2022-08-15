import axios from "./axios.instance";
import { config } from "../config";

export const getAll = async () => {
  return await axios.get(`/activity-groups?email=${config.email}`);
};

export const getDetail = async (id) => {
  return await axios.get(`/activity-groups/${id}`);
};

export const store = async (title = "New Activity") => {
  return await axios.post(`/activity-groups`, { title, email: config.email });
};

export const update = async (id, title) => {
  return await axios.patch(`/activity-groups/${id}`, { title });
};

export const destroy = async (id) => {
  return await axios.delete(`/activity-groups/${id}`);
};
