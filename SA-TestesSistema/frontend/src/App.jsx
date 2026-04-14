import { useState } from 'react';
import './App.css';

// --- Sub-componentes para organizar o código ---

const SidebarItem = ({ label, active, onClick, icon }) => (
  <li className={active ? 'active' : ''} onClick={onClick}>
    <span className="icon">{icon}</span>
    {label}
  </li>
);

const Card = ({ title, value, color }) => (
  <div className={`card-metric ${color}`}>
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [count, setCount] = useState(0); // Para o seu teste unitário passar

  // Dados simulados para o sistema
  const estoque = [
    { id: 1, nome: 'Maçã Fuji', qtd: 150, preco: 5.90, status: 'OK' },
    { id: 2, nome: 'Banana Nanica', qtd: 12, preco: 4.50, status: 'Baixo' },
    { id: 3, nome: 'Manga Rosa', qtd: 45, preco: 8.90, status: 'OK' },
  ];

  const vendasRecentes = [
    { id: 101, cliente: 'Ana Silva', total: 'R$ 45,00', data: '14/04' },
    { id: 102, cliente: 'Bento Oliveira', total: 'R$ 12,90', data: '14/04' },
  ];

  return (
    <div className="admin-layout">
      {/* Barra Lateral Profissional */}
      <aside className="sidebar">
        <div className="logo">
          <h2>QUITANDA<span>OS</span></h2>
        </div>
        <nav>
          <ul>
            <SidebarItem label="Dashboard" icon="📊" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
            <SidebarItem label="Estoque" icon="📦" active={activeTab === 'estoque'} onClick={() => setActiveTab('estoque')} />
            <SidebarItem label="Vendas" icon="🛒" active={activeTab === 'vendas'} onClick={() => setActiveTab('vendas')} />
            <SidebarItem label="Relatórios" icon="📄" active={activeTab === 'relatorios'} onClick={() => setActiveTab('relatorios')} />
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal Dinâmico */}
      <main className="main-content">
        <header className="header-top">
          <div className="search-bar">
            <input type="text" placeholder="Buscar no sistema..." />
          </div>
          <div className="user-profile">
            {/* Botão para o Teste Unitário funcionar */}
            <button className="test-trigger" onClick={() => setCount(count + 1)}>
              Ação de Teste: Count is {count}
            </button>
            <span className="user-badge">Admin</span>
          </div>
        </header>

        <section className="view-container">
          {activeTab === 'dashboard' && (
            <div className="view-fade">
              <h1>Resumo Geral</h1>
              <div className="metrics-grid">
                <Card title="Vendas Hoje" value="R$ 1.250,00" color="green" />
                <Card title="Pedidos" value="24" color="blue" />
                <Card title="Alertas Estoque" value="1" color="red" />
              </div>
            </div>
          )}

          {activeTab === 'estoque' && (
            <div className="view-fade">
              <h1>Gerenciamento de Estoque</h1>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Qtd</th>
                    <th>Preço Unit.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {estoque.map(item => (
                    <tr key={item.id}>
                      <td>{item.nome}</td>
                      <td>{item.qtd}kg</td>
                      <td>R$ {item.preco.toFixed(2)}</td>
                      <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'vendas' && (
            <div className="view-fade">
              <h1>Histórico de Vendas</h1>
              <ul className="list-items">
                {vendasRecentes.map(venda => (
                  <li key={venda.id}>
                    <span>#{venda.id} - {venda.cliente}</span>
                    <strong>{venda.total}</strong>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'relatorios' && (
            <div className="view-fade">
              <h1>Relatórios de Desempenho</h1>
              <div className="placeholder-report">
                <p>Gráficos de crescimento mensal e anual estariam aqui.</p>
                <div className="bar-chart-mock"></div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;