import FoodDetail from './FoodDetail';

export async function generateStaticParams() {
  return [
    { id: 'bennelong-restaurant' },
    { id: 'fish-market' },
    { id: 'bills-darlinghurst' },
    { id: 'chinatown-yum-cha' },
    { id: 'gelato-messina' },
    { id: 'quay-restaurant' },
    { id: 'barangaroo-house' },
    { id: 'mamak-haymarket' },
    { id: 'cafe-sydney' },
    { id: 'hurricane-grill' },
    { id: 'pancakes-on-rocks' },
    { id: 'opera-bar' },
  ];
}

export default function FoodPage({ params }: { params: { id: string } }) {
  return <FoodDetail foodId={params.id} />;
}