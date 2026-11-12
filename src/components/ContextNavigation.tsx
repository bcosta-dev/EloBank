import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import '../styles/context-navigation.css';

const links = [
  { id: 'essencia', label: 'Nossa essência' },
  { id: 'possibilidades', label: 'Próximos passos' },
  { id: 'duvidas', label: 'Dúvidas' },
];

export function ContextNavigation() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const region = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.site-header');
    const sections = [...document.querySelectorAll<HTMLElement>('main > section[id]')];
    let frame = 0;
    const update = () => {
      frame = 0;
      const show = !!header && header.getBoundingClientRect().bottom <= 0;
      setVisible(show);
      if (!show) {
        setOpen(false);
        if (region.current?.contains(document.activeElement)) header?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });
      }
      const line = (region.current?.getBoundingClientRect().height ?? 0) + 40;
      const current = sections.filter(section => section.getBoundingClientRect().top <= line).at(-1);
      setActive(current?.id ?? '');
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(() => {
      const height = region.current?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty('--context-nav-offset', height + 24 + 'px');
      schedule();
    });
    if (header) resize.observe(header);
    if (region.current) resize.observe(region.current);
    sections.forEach(section => resize.observe(section));
    const desktop = window.matchMedia('(min-width: 801px)');
    const changeLayout = () => {
      if (desktop.matches) {
        if (document.activeElement === toggle.current) region.current?.querySelector<HTMLAnchorElement>('.context-brand')?.focus({ preventScroll: true });
        setOpen(false);
      }
      schedule();
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    desktop.addEventListener('change', changeLayout);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      desktop.removeEventListener('change', changeLayout);
      document.documentElement.style.removeProperty('--context-nav-offset');
    };
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    setOpen(false);
    // Wait for the disclosure to close before measuring the sticky rail.
    requestAnimationFrame(() => {
      const target = id === 'inicio' ? document.querySelector<HTMLElement>('.site-header') : document.getElementById(id);
      if (!target) return;
      const focusTarget = id === 'inicio' ? target.querySelector<HTMLElement>('a') : target.querySelector<HTMLElement>('h2');
      if (focusTarget) {
        if (id !== 'inicio') {
          focusTarget.setAttribute('tabindex', '-1');
          focusTarget.addEventListener('blur', () => focusTarget.removeAttribute('tabindex'), { once: true });
        }
        focusTarget.focus({ preventScroll: true });
      }
      const offset = (region.current?.getBoundingClientRect().height ?? 0) + 24;
      const top = id === 'inicio' ? 0 : window.scrollY + target.getBoundingClientRect().top - offset;
      history.pushState(null, '', '#' + id);
      window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  };

  return <div ref={region} className={visible ? 'context-rail is-visible' : 'context-rail'} inert={!visible} aria-hidden={!visible} onKeyDown={event => {
    if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
  }} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <nav className="context-nav" aria-label="Navegação de seções">
      <a className="context-brand" href="#inicio" aria-label="Elo Bank — voltar ao topo" onClick={event => navigate(event, 'inicio')}><Brand /></a>
      <button ref={toggle} className="context-toggle" type="button" aria-expanded={open} aria-controls="context-links" aria-label={open ? 'Fechar navegação de seções' : 'Abrir navegação de seções'} onClick={() => setOpen(!open)}>{open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}<span>Seções</span></button>
      <div id="context-links" className={open ? 'context-links is-open' : 'context-links'}>{links.map(link => <a key={link.id} href={'#' + link.id} aria-current={active === link.id ? 'location' : undefined} onClick={event => navigate(event, link.id)}>{link.label}</a>)}</div>
      <a className="context-top" href="#inicio" aria-label="Voltar ao topo" onClick={event => navigate(event, 'inicio')}><ArrowUp size={19} aria-hidden="true" /><span>Topo</span></a>
    </nav>
  </div>;
}
