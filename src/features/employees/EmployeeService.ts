import axios from '../../lib/api-client';
import { Employee, EmployeePayload } from '../../types/Employee';

const getAll = async (): Promise<Employee[]> => {
  const res = await axios.get<Employee[]>('/employees');
  return res.data;
};

const add = async (data:EmployeePayload): Promise<string> => {
    const res = await axios.post<string>('/employees', data);
    return res.data;
  };
const update = async (id:number,data:EmployeePayload): Promise<string> => {
    const res = await axios.put<string>('/employees/' + id, data);
    return res.data;
  };
const remove = async (id:number): Promise<string> => {
    const res = await axios.delete<string>('/employees/' + id);
    return res.data;
  };

export default {
    getAll,
    add,
    update,
    remove
};
