import React from 'react'
import { ImageItem } from '@/lib/images'
import ImageCard from './ImageCard'

export default function Gallery({ items }: { items: ImageItem[] }) {
  return (
    <section className="masonry">
      {items.map((it) => (
        <ImageCard key={it.id} item={it} />
      ))}
    </section>
  )
}
