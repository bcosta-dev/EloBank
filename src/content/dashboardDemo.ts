/** Fixed presentation fixtures. Not customer data or a banking ledger. */
export type DemoMovement = {
  id: string;
  description: string;
  category: string;
  date: string;
  amountCents: number;
};

export const demoMovements: readonly DemoMovement[] = [
  { id: 'demo-4', description: 'Mercado do bairro', category: 'Compra no débito', date: '2026-11-09', amountCents: -34000 },
  { id: 'demo-3', description: 'Aluguel', category: 'Pagamento', date: '2026-11-07', amountCents: -240000 },
  { id: 'demo-2', description: 'Transferência recebida', category: 'Entrada', date: '2026-11-06', amountCents: 30000 },
  { id: 'demo-1', description: 'Salário', category: 'Crédito em conta', date: '2026-11-05', amountCents: 650000 },
];
export const demoOpeningCents = 842000;
export const demoIncomingCents = demoMovements.reduce((sum, item) => sum + Math.max(0, item.amountCents), 0);
export const demoOutgoingCents = demoMovements.reduce((sum, item) => sum + Math.max(0, -item.amountCents), 0);
export const demoBalanceCents = demoOpeningCents + demoIncomingCents - demoOutgoingCents;
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatDemoMoney = (cents: number) => currency.format(cents / 100);
