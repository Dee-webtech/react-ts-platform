import { useEffect, useState } from "react";
import type { Business } from "./types/Business";
import { getBusinesses } from "./api/businessApi";
import BusinessList from "./components/BusinessList";

export default function App() {
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    getBusinesses().then(setBusinesses);
  }, []);

  return (
    <div>
      <h1>Business Finder Platform</h1>
      <BusinessList businesses={businesses} />
    </div>
  );
}
