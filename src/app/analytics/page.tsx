import InteractionAnalytics from '@/components/history/InteractionAnalytics';
import React from 'react';

export const metadata = {
  title: 'BondTrack — Analytics Page',
  description:
    'A smart friendship management app to track interactions, manage relationships, and stay connected with the people who matter.',
};

export default function HistoryPage() {
  return(

  <div className='h-screen'>
    <InteractionAnalytics />;
  </div>

  )

}
