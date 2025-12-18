import React from 'react'
import { ImageItem, buildSrc } from '@/lib/images'

export default function ImageCard({ item }: { item: ImageItem }) {
  const src = buildSrc(item.id, 800)

  return (
    <article className="card">
      <img src={src} alt={item.title} loading="lazy" />
      <div className="meta">
        <h3 className="title">{item.title}</h3>
        <p className="author">{item.author}</p>
        <div className="tags">{item.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </article>
  )
}
