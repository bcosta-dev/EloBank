import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Brand } from './Brand';
import { ActionLink } from './ui';

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const breakpoint = window.matchMedia('(min-width: 801px)');
    const closeOnDesktop = () => { if (breakpoint.matches) setOpen(false); };
    breakpoint.addEventListener('change', closeOnDesktop);
    return () => breakpoint.removeEventListener('change', closeOnDesktop);
  }, []);
  return <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } }}><div className="container header-inner">
    <a href="#inicio" aria-label="Elo Bank — início" onClick={() => setOpen(false)}><Brand /></a>
    <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Navegação principal">
      <a href="#essencia" onClick={() => setOpen(false)}>Nossa essência</a>
      <a href="#possibilidades" onClick={() => setOpen(false)}>Próximos passos</a>
      <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas</a>
      <ActionLink href="#sobre" variant="outline" onClick={() => setOpen(false)}>Sobre o projeto</ActionLink>
    </nav>
  </div></header>;
}
