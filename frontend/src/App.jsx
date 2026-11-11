import { useEffect, useState } from 'react';

export default function App() {
  const [health, setHealth] = useState('Verificando serviços...');

  useEffect(() => {
    fetch('/api/health')
      .then((response) => {
        if (!response.ok) throw new Error('API indisponível');
        return response.json();
      })
      .then((data) => setHealth(`API ${data.status} · PostgreSQL ${data.database}`))
      .catch(() => setHealth('Não foi possível conectar à API e ao PostgreSQL.'));
  }, []);

  return (
    <main className="page">
      <section className="card" aria-labelledby="title">
        <span className="eyebrow">Seu monólito, pronto para crescer</span>
        <h1 id="title">FindMyPack</h1>
        <p>Uma base para organizar e encontrar seus pacotes.</p>
        <div className="status" role="status">{health}</div>
      </section>
    </main>
  );
}
