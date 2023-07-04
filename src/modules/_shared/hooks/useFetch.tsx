import { useState, useEffect } from 'react';

import { apiGet } from '../services/apiService';
import { DashboardData } from '../@types';

export const useFetch = (url: string) => {
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    graph_data: {},
    top_locations: [],
    top_sources: [],
  });

  useEffect(() => {
    (async () => {
      const data: any = await apiGet(url);
      if (data) setDashboardData(data.data);
    })();
  }, [url]);

  return dashboardData;
};
