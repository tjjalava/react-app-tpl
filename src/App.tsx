import { useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import * as styles from "./App.css";
import DiseasePage from "./DiseasePage";

interface Disease {
  id: number;
  name: string;
  type: string;
  fatalityRate: string;
  region: string;
}

const fetchDiseases = async (): Promise<Disease[]> => {
  const response = await fetch('/api/deadlyDiseases');
  if (!response.ok) {
    throw new Error('Failed to fetch diseases');
  }
  return response.json();
};

function DiseaseList() {
  const { data: diseases, isLoading, error } = useQuery<Disease[], Error>({
    queryKey: ['diseases'],
    queryFn: fetchDiseases,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.heading}>Deadly Diseases</h1>
      <ul className={styles.list}>
        {diseases?.map(disease => (
          <li key={disease.id} className={styles.card}>
            <Link to={`/disease/${disease.id}`} className={styles.diseaseLink}>
              <span className={styles.diseaseName}>{disease.name}</span>
              <span className={styles.diseaseInfo}>Type: {disease.type}</span>
              <span className={styles.diseaseInfo}>Region: {disease.region}</span>
              <span className={styles.fatalityRate}>Fatality Rate: {disease.fatalityRate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiseaseList />} />
        <Route path="/disease/:id" element={<DiseasePage />} />
      </Routes>
    </Router>
  );
}

export default App;
