import api from './api-config';

export const getAllRoutines = async () => {
  const resp = await api.get('/routines');
  return resp.data;
};

export const getOneRoutine = async (id) => {
  const resp = await api.get(`/routines/${id}`);
  return resp.data;
};

export const postRoutine = async (routineData) => {
  const resp = await api.post('/routines', { routine: routineData });
  return resp.data;
};

export const deleteRoutine = async (id) => {
  const resp = await api.delete(`/routines/${id}`);
  return resp;
};

export const putRoutine = async (id, routineData) => {
  const resp = await api.put(`/routines/${id}`, { routine: routineData });
  return resp.data;
};

export const addStretchToRoutine = async (stretchId, id) => {
  const resp = await api.put(`/stretches/${stretchId}/routines/${id}`);
  return resp.data;
};
