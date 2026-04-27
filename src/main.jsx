import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { CarouselStructure } from './components/carousel/CarouselStructure';

const categorias = [
  { id: 'hamburguer', name: 'Hambúrguer', image: '🍔' },
  { id: 'bebidas_frias', name: 'Frias', image: '🥤' },
  { id: 'bebidas_quentes', name: 'bebidas Quentes', image: '☕' },
  { id: 'acompanhamentos', name: 'Acompanhamentos', image: '🍟' },
  { id: 'sobremesas', name: 'Sobremesas', image: '🍦' },
  { id: 'lancamentos', name: 'Lançamentos', image: '🎁' },
];

const todosOsProdutos = [
  { id: 101, categoria: 'hamburguer', name: 'Big Mac', price: '25,90' },
  { id: 102, categoria: 'hamburguer', name: 'Quarteirão', price: '22,90' },
  { id: 201, categoria: 'bebidas_frias', name: 'Coca-Cola 500ml', price: '9,90' },
  { id: 301, categoria: 'sobremesas', name: 'McFlurry', price: '15,00' },
];

const TotemApp = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('hamburguer');
  const produtosFiltrados = todosOsProdutos.filter(p => p.categoria === categoriaAtiva);

  return (
    <div style={{ background: '#1a1a1a', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <header style={{ padding: '15px', textAlign: 'center', opacity: 0.8 }}>
        <span style={{ fontSize: '0.9rem', letterSpacing: '2px' }}>Vista Alta - Totem</span>
      </header>

      {/* CARROSSEL DE CATEGORIAS */}
      <CarouselStructure 
        items={categorias} 
        categoriaAtiva={categoriaAtiva}
        onItemClick={(id) => setCategoriaAtiva(id)} 
      />

      <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '30px', 
          borderLeft: '5px solid #FFBC0D', 
          paddingLeft: '15px',
          display: 'flex',
          alignItems: 'center'
        }}>
          {categorias.find(c => c.id === categoriaAtiva)?.name}
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '25px' 
        }}>
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map(produto => (
              <div key={produto.id} style={{ 
                background: '#262626', 
                padding: '25px', 
                borderRadius: '15px', 
                textAlign: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
              }}>
                 <div style={{ fontSize: '60px', marginBottom: '15px' }}>🍔</div>
                 <h3 style={{ fontSize: '1.1rem', margin: '10px 0', fontWeight: '500' }}>{produto.name}</h3>
                 <p style={{ color: '#FFBC0D', fontWeight: 'bold', fontSize: '1.3rem' }}>R$ {produto.price}</p>
              </div>
            ))
          ) : (
            <p style={{ opacity: 0.5 }}>Nenhum produto cadastrado nesta categoria.</p>
          )}
        </div>
      </main>
    </div>
  );
};

// Renderização final
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TotemApp />
  </React.StrictMode>
);