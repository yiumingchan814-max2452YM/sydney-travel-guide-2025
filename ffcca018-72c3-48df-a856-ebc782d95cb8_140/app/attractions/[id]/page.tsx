import AttractionDetail from './AttractionDetail';

export async function generateStaticParams() {
  return [
    { id: 'sydney-opera-house' },
    { id: 'harbour-bridge' },
    { id: 'royal-botanic-gardens' },
    { id: 'taronga-zoo' },
    { id: 'bondi-beach' },
    { id: 'darling-harbour' },
    { id: 'sydney-tower-eye' },
    { id: 'the-rocks' },
    { id: 'manly-beach' },
    { id: 'luna-park' },
    { id: 'australian-museum' },
    { id: 'art-gallery-nsw' },
  ];
}

export default function AttractionPage({ params }: { params: { id: string } }) {
  return <AttractionDetail attractionId={params.id} />;
}