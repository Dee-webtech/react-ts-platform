import type { Business } from "../types/Business";

type Props = {
  businesses: Business[];
};

export default function BusinessList({ businesses }: Props) {
  return (
    <div>
      {businesses.map((b) => (
        <div key={b.id}>
          <h3>{b.name}</h3>
          <p>{b.category} - {b.location}</p>
        </div>
      ))}
    </div>
  );
}
