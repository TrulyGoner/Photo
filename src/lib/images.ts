export type ImageItem = {
  id: number
  title: string
  author: string
  width: number
  height: number
  tags: string[]
  color?: string
}

// Мок
export const IMAGES: ImageItem[] = [
  { id: 1015, title: 'Mountain view', author: 'Anna', width: 1200, height: 800, tags: ['nature','mountain'], color: 'green' },
  { id: 1025, title: 'City skyline', author: 'Mark', width: 800, height: 1200, tags: ['city','architecture'], color: 'blue' },
  { id: 1003, title: 'Portrait smile', author: 'Lina', width: 600, height: 900, tags: ['people','portrait'], color: 'warm' },
  { id: 1020, title: 'Beach sunset', author: 'Oleg', width: 1600, height: 900, tags: ['beach','sunset'], color: 'orange' },
  { id: 1069, title: 'Forest path', author: 'Ira', width: 900, height: 1200, tags: ['nature','forest'], color: 'green' },
  { id: 1043, title: 'Street life', author: 'Paul', width: 1200, height: 800, tags: ['street','people'], color: 'neutral' },
  { id: 1056, title: 'Minimal desk', author: 'Nora', width: 800, height: 800, tags: ['still-life','interior'], color: 'neutral' },
  { id: 1035, title: 'Snow hills', author: 'Viktor', width: 1600, height: 1100, tags: ['winter','landscape'], color: 'cool' },
  { id: 1074, title: 'Abstract color', author: 'Zoe', width: 900, height: 600, tags: ['abstract','art'], color: 'colorful' },
  { id: 1084, title: 'Old bridge', author: 'Sasha', width: 1200, height: 700, tags: ['architecture','bridge'], color: 'warm' }
]

export function buildSrc(id: number, width: number) {
  // Тут placeholder
  return `https://picsum.photos/id/${id}/${width}`
}

