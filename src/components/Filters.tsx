import React from 'react'

type Props = {
  orientation: string
  setOrientation: (s: string) => void
  color: string
  setColor: (s: string) => void
}

export default function Filters({ orientation, setOrientation, color, setColor }: Props) {
  return (
    <div className="filters">
      <label>
        Orientation
        <select value={orientation} onChange={(e) => setOrientation(e.target.value)}>
          <option value="all">All</option>
          <option value="landscape">Landscape</option>
          <option value="portrait">Portrait</option>
          <option value="square">Square</option>
        </select>
      </label>

      <label>
        Color
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="any">Any</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="warm">Warm</option>
          <option value="neutral">Neutral</option>
        </select>
      </label>
    </div>
  )
}
