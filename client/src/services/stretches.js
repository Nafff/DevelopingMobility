import api from './config';

export const getAllStretches = async () => {
  const resp = await api.get('/stretches');
  return resp.data;
};
