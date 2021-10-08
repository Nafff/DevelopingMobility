import api from './api-config';

export const getAllStretches = async () => {
  const resp = await api.get('/stretches');
  return resp.data;
};

export const getOneStretch = async (id) => {
  const resp = await api.get(`/stretches/${id}`);
  return resp.data;
};