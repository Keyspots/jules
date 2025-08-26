export async function fetchVendors() {
  try {
    const url = process.env.REACT_APP_SHEET_URL;
    if (!url) throw new Error('missing sheet url');
    const res = await fetch(url);
    if (!res.ok) throw new Error('request failed');
    return await res.json();
  } catch (err) {
    // Fallback static data
    return [
      {
        id: 1,
        name: 'Banning Air Conditioning & Heating',
        category: 'HVAC',
        city: 'Banning',
        phone: '(951) 769-6672',
        website: 'https://www.banningair.com',
        verified: true
      },
      {
        id: 2,
        name: 'J & M Air Conditioning & Heating',
        category: 'HVAC',
        city: 'San Jacinto',
        phone: '(951) 654-3464',
        website: 'https://www.jmairnheat.com',
        verified: true
      }
    ];
  }
}
