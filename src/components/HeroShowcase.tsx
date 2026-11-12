import { ArrowDownLeft, ArrowUpRight, BatteryFull, Signal, Wifi } from 'lucide-react';
import { Brand } from './Brand';
import '../styles/hero-showcase.css';

/** Static editorial illustration. No banking controls, state or customer data. */
export function HeroShowcase() {
  return <figure className="product-showcase">
    <div className="product-scene" role="img" aria-label="Ilustração de smartphone Elo Bank com saldo fictício de R$ 12.480,00 e exemplos de movimentações, acompanhada de cartão conceitual. Todos os dados são de demonstração; não há operações disponíveis.">
      <div className="phone" aria-hidden="true">
        <div className="phone-screen">
          <div className="phone-status"><span>9:41</span><span><Signal size={12} /><Wifi size={12} /><BatteryFull size={17} /></span></div>
          <div className="phone-camera" />
          <div className="phone-app">
            <div className="phone-brand"><Brand decorative /><span className="demo-avatar">M</span></div>
            <div className="demo-label">Demonstração · Dados fictícios</div>
            <div className="demo-greeting">Olá, Marina.</div>
            <p className="demo-intro">Seu dia, com mais clareza.</p>
            <div className="demo-balance"><span>Saldo ilustrativo</span><strong>R$ 12.480<span>,00</span></strong><small>Valor fictício, sem conta vinculada</small></div>
            <div className="demo-activity"><div className="demo-section-title">Seu dia a dia<span>Exemplo</span></div>
              <div className="demo-transaction"><span className="demo-transaction-icon"><ArrowDownLeft size={17} /></span><div>Entrada ilustrativa<small>09 nov, 09:20</small></div><strong>+ R$ 250,00</strong></div>
              <div className="demo-transaction"><span className="demo-transaction-icon"><ArrowUpRight size={17} /></span><div>Café da manhã<small>09 nov, 08:15</small></div><strong>− R$ 18,00</strong></div>
            </div>
            <div className="demo-message">Conexões que ficam.<span>Uma ideia de experiência Elo Bank.</span></div>
          </div>
          <div className="phone-home" />
        </div>
      </div>
      <div className="editorial-card" aria-hidden="true"><div className="editorial-card-top"><Brand decorative /><span>Conceito</span></div><div className="card-chip"><i /><i /><i /></div><div className="editorial-card-bottom"><span>Conexões que ficam.</span><span>elo</span></div></div>
    </div>
    <figcaption>Interface demonstrativa. Dados fictícios.<br /><span>Cartão ilustrativo, sem emissão ou operações disponíveis.</span></figcaption>
  </figure>;
}
