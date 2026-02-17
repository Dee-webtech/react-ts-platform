import type { Business } from "../types/Business";

export const getBusinesses = async (): Promise<Business[]> => {
  return [
    { id: 1, name: "Lilly Shoes", category: "Shoes", location: "Abuja" },
    { id: 2, name: "Light Strands Hair", category: "Beauty", location: "Abuja" },
  ];
};
