import GuideDetail from './GuideDetail';

export async function generateStaticParams() {
  return [
    { id: 'transportation-guide' },
    { id: 'accommodation-guide' },
    { id: 'budget-travel-guide' },
    { id: 'aboriginal-culture-guide' },
    { id: 'seasonal-events-guide' },
    { id: 'food-culture-guide' },
    { id: 'safety-tips-guide' },
    { id: 'photography-spots-guide' },
    { id: 'family-travel-guide' },
    { id: 'nightlife-guide' },
  ];
}

export default function GuidePage({ params }: { params: { id: string } }) {
  return <GuideDetail guideId={params.id} />;
}