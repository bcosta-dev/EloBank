import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { type DemoMovement, formatDemoMoney } from '../../content/dashboardDemo';

export function MovementRow({ movement }: { movement: DemoMovement }) {
  const incoming = movement.amountCents > 0;
  const date = movement.date.slice(8) + ' nov';
  return <li className="demo-movement">
    <span className={incoming ? 'demo-direction is-incoming' : 'demo-direction'} aria-hidden="true">{incoming ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}</span>
    <div className="demo-movement-description"><span>{movement.description}</span><small>{movement.category}</small></div>
    <time dateTime={movement.date}>{date}</time>
    <span className={incoming ? 'demo-amount is-incoming' : 'demo-amount'}><span className="demo-sr-only">{incoming ? 'Entrada: ' : 'Saída: '}</span>{incoming ? '+' : '−'} {formatDemoMoney(Math.abs(movement.amountCents))}</span>
  </li>;
}

export function MovementList({ movements }: { movements: readonly DemoMovement[] }) {
  return <section className="demo-movements" aria-label="Movimentações fictícias de novembro de 2026"><div className="demo-movements-heading"><h3>Movimentações</h3><span>01–09 nov 2026</span></div><ul>{movements.map(movement => <MovementRow key={movement.id} movement={movement} />)}</ul></section>;
}
