// src/components/date-formatter.tsx
'use client';

import { useEffect, useState } from 'react';

export function DateFormatter({ isoDate }: { isoDate: string }) {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    setFormattedDate(date.toLocaleDateString('en-US', options));
  }, [isoDate]);

  return <span>{formattedDate}</span>;
}
