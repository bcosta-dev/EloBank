import { ArrowDown, ArrowUpRight, CreditCard, Layers3, MessagesSquare, MoveUpRight } from 'lucide-react';
import { HeroShowcase } from './components/HeroShowcase';
import { ContextNavigation } from './components/ContextNavigation';
import { Header } from './components/Header';
import { Brand } from './components/Brand';
import { AccordionItem, ActionLink, SectionHeading, ServiceCard } from './components/ui';
import { questions } from './content/institutional';

export function App() {
  return <>
    <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <Header />
    <ContextNavigation />
    <main id="conteudo" tabIndex={-1}>
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy"><h1 id="hero-title">Seu dinheiro.<br />Suas escolhas.<br />Conexões que ficam.</h1><p>Uma visão mais clara da sua vida financeira. Mais espaço para decidir o que importa para você.</p><div className="hero-actions"><ActionLink href="#essencia">Conheça o Elo Bank</ActionLink><a className="hero-secondary" href="#possibilidades">Explore o que vem a seguir</a></div><span className="hero-note">Projeto conceitual. Sem serviços financeiros disponíveis.</span></div>
          <HeroShowcase />
        </div>
        <div className="container hero-bottom"><span>Um novo olhar para a sua vida financeira.</span><a href="#essencia" aria-label="Explorar nossa essência"><ArrowDown size={20} /></a></div>
      </section>
      <section className="essence section" id="essencia" aria-labelledby="essence-title"><div className="container essence-grid">
        <SectionHeading id="essence-title" title="Menos distância. Mais conexão.">Entender não deveria exigir esforço. Nossa proposta começa com o essencial: clareza, simplicidade e proximidade.</SectionHeading>
        <div className="principles"><article><span className="principle-icon"><Layers3 aria-hidden="true" /></span><div><h3>Clareza em primeiro lugar</h3><p>Informação bem organizada, linguagem direta e espaço para o que realmente importa.</p></div></article><article><span className="principle-icon"><MoveUpRight aria-hidden="true" /></span><div><h3>Simples em cada detalhe</h3><p>Encontrar o que procura com facilidade, no celular ou no computador.</p></div></article><article><span className="principle-icon"><MessagesSquare aria-hidden="true" /></span><div><h3>Uma relação mais próxima</h3><p>Uma linguagem direta e acolhedora, para que cada informação faça sentido.</p></div></article></div>
      </div></section>
      <section className="possibilities section" id="possibilidades" aria-labelledby="possibilities-title"><div className="container">
        <div className="section-top"><SectionHeading id="possibilities-title" title="O futuro começa por uma boa base." /><p>Conheça o que existe hoje e as próximas etapas previstas para o Elo Bank.</p></div>
        <div className="service-grid">
          <ServiceCard icon={<CreditCard />} title="Uma identidade que conecta" className="service-feature" status="O primeiro passo"><p>Azul que transmite presença. Menta que abre espaço para o novo. Uma expressão própria em cada detalhe.</p><div className="service-card-art" aria-hidden="true"><Brand decorative /><span>Seu próximo capítulo.</span></div><span className="service-caption">Cartão ilustrativo. Não disponível para emissão.</span></ServiceCard>
          <ServiceCard icon={<Layers3 />} title="Seu espaço, com mais clareza" className="service-light" status="Etapa futura"><p>Uma área do cliente está prevista para as próximas etapas. As funcionalidades serão definidas conforme os requisitos aprovados.</p></ServiceCard>
          <ServiceCard icon={<MessagesSquare />} title="Um início acompanhado" className="service-mint" status="Etapa futura"><p>O cadastro de clientes será feito exclusivamente por operadores autorizados. Não haverá autocadastro público.</p></ServiceCard>
        </div><p className="services-note">Elo Bank é um projeto fictício. Nenhum serviço financeiro está disponível nesta página.</p>
      </div></section>
      <section className="about section" id="sobre" aria-labelledby="about-title"><div className="container about-panel"><div className="about-signature"><Brand decorative /><p>O que importa<br />é o que fica.</p><span>Clareza para escolher.<br />Proximidade para seguir.</span></div><div className="about-copy"><h2 id="about-title">Uma nova conexão.<br />Um projeto em construção.</h2><p>Uma experiência financeira começa muito antes de uma transação. Começa na confiança de entender o que está à sua frente. É essa ideia que orienta o Elo Bank.</p><p>Somos um projeto fictício, ainda em construção. Por aqui, você conhece nossa identidade e a direção das próximas etapas, sem abertura de conta ou operações financeiras.</p><a className="text-link" href="#duvidas">Entenda o projeto <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
      <section className="faq section" id="duvidas" aria-labelledby="faq-title"><div className="container faq-grid"><SectionHeading id="faq-title" title="É bom ter clareza.">Respostas para conhecer este momento do Elo Bank.</SectionHeading><div>{questions.map(item => <AccordionItem key={item.question} question={item.question}><p>{item.answer}</p></AccordionItem>)}</div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-top"><a href="#inicio" aria-label="Elo Bank — voltar ao início"><Brand /></a><p>Conexões que ficam.</p><a className="text-link" href="#inicio">Voltar ao início <ArrowUpRight size={18} aria-hidden="true" /></a></div><div className="footer-bottom"><p>Elo Bank · Projeto fictício de banco digital.</p><p>Sem vínculo com instituições financeiras ou bandeiras de pagamento.<br />Esta página não oferece serviços financeiros nem coleta dados bancários.</p></div></div></footer>
  </>;
}
