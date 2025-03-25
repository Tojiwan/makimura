
import type { AxiosResponse } from 'axios';

interface Interval {
  id            : number;
  start_time    : string;
  end_time      : string;
  operating_days: string;
  is_available  : boolean;
  categories    : Category[];
}

interface Category {
  id        : number;
  name      : string;
  created_at: string;
  updated_at: string;
  slug      : string;
  pivot     : {
    branch_id    : number;
    category_id  : number;
    slots        : number;
    default_slots: number;
    is_shown     : number;
  };
}

interface Categories {
  id        : number,
  name      : string,
  slug      : string,
  created_at: string,
  updated_at: string
}

  // Function to convert time format
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period           = hours > = 12 ? 'PM' : 'AM';
  const formattedHours   = hours % 12 || 12;             // Convert 0 to 12
  return `${formattedHours}:${String(minutes).padStart(2, '0')} ${period}`;
};

export const useBranchDelivery = () => {

  const { $axios } = useNuxtApp();  // Composition API in Nuxt 3

  const getBranches = async () => {
    try {
      const response: AxiosResponse<any> = await $axios.get(`/branches`);
      return response.data;  // Return only the data for cleaner usage in components
    } catch (error) {
      console.error('Error fetching branches in service:', error);
      throw error;  // Re-throw the error to handle it in the component
    }
  };

  const getIntervals = async (date: string, branch: string): Promise<any[]> => {
    try {
      const response: AxiosResponse<any> = await $axios.get(`/branch/${branch}/intervals?date=${date}`);
      return response.data;  // Return only the data for cleaner usage in components
    } catch (error) {
      console.error('Error fetching intervals in service:', error);
      throw error;  // Re-throw the error to handle it in the component
    }
  };

  const getHotSellings = async (branch: string, date: string, interval: string) => {
    try {
      const response: AxiosResponse<any> = await $axios.get(`/products/branch/${branch}/hot?date=${date}&branch_interval_id=${interval}`);
      return response.data;  // Return only the data for cleaner usage in components
    } catch (error) {
      console.error('Error fetching hot sellings in service:', error);
      throw error;  // Re-throw the error to handle it in the component
    }
  }

  const getCategoryMeals = async () => {

    try {
      const response: AxiosResponse<any> = await $axios.get(`/categories`);
      return response.data;  // Return only the data for cleaner usage in components
    } catch (error) {
      console.error('Error fetching categories in service:', error);
      throw error;  // Re-throw the error to handle it in the component
    }
  }

  return {
    getBranches,
    getIntervals,
    getHotSellings,
    getCategoryMeals
  }
}