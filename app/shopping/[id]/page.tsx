import ShoppingDetail from './ShoppingDetail';

export async function generateStaticParams() {
  return [
    { id: 'qvb' },
    { id: 'westfield-sydney' },
    { id: 'strand-arcade' },
    { id: 'paddy-market' },
    { id: 'barangaroo-shops' },
    { id: 'bondi-markets' },
    { id: 'myer-sydney' },
    { id: 'dfo-homebush' },
    { id: 'harbourside-shopping' },
    { id: 'pitt-street-mall' },
    { id: 'chatswood-chase' },
    { id: 'broadway-shopping' },
  ];
}

export default function ShoppingPage({ params }: { params: { id: string } }) {
  return <ShoppingDetail shoppingId={params.id} />;
}