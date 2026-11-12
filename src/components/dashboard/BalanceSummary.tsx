import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { formatDemoMoney } from '../../content/dashboardDemo';

type Props = { balanceCents: number; openingCents: number; incomingCents: number; outgoingCents: number };
export function BalanceSummary({ balanceCents, openingCents, incomingCents, outgoingCents }: Props) {
  return <div className="demo-summary">
    <dl className="demo-total"><dt>Saldo disponível</dt><dd>{formatDemoMoney(balanceCents)}</dd></dl>
    <dl className="demo-flows"><div><dt><ArrowDownLeft size={15} aria-hidden="true" />Entradas</dt><dd>{formatDemoMoney(incomingCents)}</dd></div><div><dt><ArrowUpRight size={15} aria-hidden="true" />Saídas</dt><dd>{formatDemoMoney(outgoingCents)}</dd></div></dl>
    <p className="demo-opening">Saldo em 01 nov: {formatDemoMoney(openingCents)}</p>
  </div>;
}
