import axios from "./axios.instance";

export const store = async (data) => {
  return await axios.post(`/todo-items`, { ...data, is_active: true });
};

export const update = async (id, dataUpdate) => {
  return await axios.patch(`/todo-items/${id}`, dataUpdate);
};

export const destroy = async (id) => {
  return await axios.delete(`/todo-items/${id}`);
};
