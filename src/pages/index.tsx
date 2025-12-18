import React, { useEffect, useMemo, useRef, useState } from 'react'
import type { NextPage } from 'next'
import SearchBar from '@/components/SearchBar'
import Filters from '@/components/Filters'
import Gallery from '@/components/Gallery'
import { IMAGES, ImageItem } from '@/lib/images'

const PAGE_SIZE = 6

const Home: NextPage = () => {
  const [query, setQuery] = useState('')
  const [orientation, setOrientation] = useState('all')
  const [color, setColor] = useState('any')
  const [page, setPage] = useState(1)
  const [items, setItems] = useState<ImageItem[]>([])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return IMAGES.filter((it) => {
      if (q) {
        const hay = [it.title, it.author, ...(it.tags || [])].join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      if (color !== 'any' && it.color !== color) return false
      if (orientation !== 'all') {
        const ratio = it.width / it.height
        if (orientation === 'landscape' && ratio <= 1) return false
        if (orientation === 'portrait' && ratio >= 1) return false
        if (orientation === 'square' && Math.abs(ratio - 1) > 0.1) return false
      }
      return true
    })
  }, [query, color, orientation])

  useEffect(() => {
    setPage(1)
    setItems(filtered.slice(0, PAGE_SIZE))
  }, [filtered])

  useEffect(() => {
    //Подгружаем следующую страницу при изменении страницы
    const start = 0
    const newItems = filtered.slice(0, PAGE_SIZE * page)
    setItems(newItems)
  }, [page, filtered])

  const sentinel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPage((p) => p + 1)
        }
      })
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <main className="container">
      <header className="top">
        <h1>Photo catalogue</h1>
        <SearchBar value={query} onChange={setQuery} />
        <Filters orientation={orientation} setOrientation={setOrientation} color={color} setColor={setColor} />
      </header>

      <Gallery items={items} />

      <div ref={sentinel} style={{ height: 1 }} />

      <footer className="footer">
        <p>
          Showing {items.length} of {filtered.length} results
        </p>
        {items.length < filtered.length && (
          <button onClick={() => setPage((p) => p + 1)} className="load-more">
            Load more
          </button>
        )}
      </footer>
    </main>
  )
}

export default Home
