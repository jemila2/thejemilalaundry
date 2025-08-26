
import { useEffect, useState } from 'react';
import { fetchEmployeeTasks } from '../services/api';

 const useEmployeeData = (employeeId) => {
  const [data, setData] = useState({
    tasks: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    if (!employeeId) {
      setData(prev => ({ ...prev, loading: false, error: 'No employee ID' }));
      return;
    }

    const loadData = async () => {
      try {
        const tasks = await fetchEmployeeTasks(employeeId);
        setData({ tasks, loading: false, error: null });
      } catch (error) {
        setData({ tasks: [], loading: false, error: error.message });
      }
    };

    loadData();
  }, [employeeId]);

  return data;
};
export default useEmployeeData