import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import * as styles from "./DiseasePage.css";

interface Disease {
  id: number;
  name: string;
  type: string;
  fatalityRate: string;
  region: string;
}

const fetchDisease = async (id: string): Promise<Disease> => {
  const response = await fetch(`/api/deadlyDiseases/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch disease');
  }
  return response.json();
};

function DiseasePage() {
  const { id } = useParams<{ id: string }>();
  const { data: disease, isLoading, error } = useQuery<Disease, Error>({
    queryKey: ['disease', id],
    queryFn: () => fetchDisease(id!),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!disease) return <div>Disease not found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{disease.name}</h1>
      <div className={styles.info}>
        <p><strong>Type:</strong> {disease.type}</p>
        <p><strong>Fatality Rate:</strong> {disease.fatalityRate}</p>
        <p><strong>Region:</strong> {disease.region}</p>
      </div>
      <Link to="/" className={styles.backLink}>Back to list</Link>
    </div>
  );
}

export default DiseasePage;
