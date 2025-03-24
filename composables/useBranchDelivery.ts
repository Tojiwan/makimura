interface Interval {
  id: number;
  start_time: string;
  end_time: string;
  operating_days: string;
  is_available: boolean;
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  slug: string;
  pivot: {
    branch_id: number;
    category_id: number;
    slots: number;
    default_slots: number;
    is_shown: number;
  };
}

interface Categories {
  id: number,
  name: string,
  slug: string,
  created_at: string,
  updated_at: string
}

// Function to convert time format
const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12
  return `${formattedHours}:${String(minutes).padStart(2, '0')} ${period}`;
};

export const useBranchDelivery = () => {
  const getBranches = async () => {
    const req = await $fetch('https://bio.makimuraramen.com/api/branches')
    return req
  };


  const getIntervals = async (date: string, branch: string): Promise<Interval[]> => {
    if (date.trim().length > 0 || branch.trim().length > 0) {
      const req = await $fetch<Interval[]>(`https://bio.makimuraramen.com/api/branch/${branch}/intervals?date=${date}`);

      // Convert time format
      return req.map((interval) => ({
        ...interval,
        start_time: formatTime(interval.start_time),
        end_time: formatTime(interval.end_time),
      }));
    }
    return [];
  };

  const getHotSellings = async (branch: string, date: string, interval: string) => {
    const req = await $fetch(`https://bio.makimuraramen.com/api/products/branch/${branch}/hot?date=${date}&branch_interval_id=${interval}`)
    return req
  }

  const getCategoryMeals = async () => {
    const req_categories = await $fetch<Categories[]>('https://bio.makimuraramen.com/api/categories')

    return req_categories
  }

  return {
    getBranches,
    getIntervals,
    getHotSellings,
    getCategoryMeals
  }
}