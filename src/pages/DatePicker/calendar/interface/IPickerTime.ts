export const PickTimeConfig = [
  [
    { label: '12时', value: '12' },
    { label: '1时', value: '1' },
    { label: '2时', value: '2' },
    { label: '3时', value: '3' },
    { label: '4时', value: '4' },
    { label: '5时', value: '5' },
    { label: '6时', value: '6' },
    { label: '7时', value: '7' },
    { label: '8时', value: '8' },
    { label: '9时', value: '9' },
    { label: '10时', value: '10' },
    { label: '11时', value: '11' },
  ],
  Array.from({ length: 60 }, (_, i) => ({
    label: `${i.toString().padStart(2, '0')}分`,
    value: i.toString().padStart(2, '0'),
  })),
  [
    { label: '上午', value: 'AM' },
    { label: '下午', value: 'PM' },
  ],
];