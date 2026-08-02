import React from 'react'
import { SpotlightCard } from './components/SpotlightCard'

export default function CardDemo() {
  return (
    <div className="m-8 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3" >
      <SpotlightCard
        title="Huffman Coding"
        description="Visualize how data is compressed in a lossless manner using Huffman coding."
        glowColor="bg-red-500/60 dark:bg-red-400/60"
        className="bg-[url('./red.png')] bg-cover  justify-center"
       
      >
      
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
      <SpotlightCard
        title="Ceaser's Cipher"
        description="Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique."
        glowColor="bg-emerald-500/60 dark:bg-emerald-400/60"
           className="bg-[url('./ib.png')] bg-cover  justify-center"
      >
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
      <SpotlightCard
        title="Sorting Algorithms"
        description="Learn how different sorting algorithms work and compare their efficiency in real-time."
        glowColor="bg-blue-500/60 dark:bg-blue-400/60"
        className="bg-[url('./ii.png')] bg-cover  justify-center"
      >
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
      <SpotlightCard
        title="Hash Functions and Collisions"
        description="Explore how hash functions work and understand the concept of collisions in hashing."
        glowColor="bg-emerald-500/60 dark:bg-emerald-400/60"
        className="bg-[url('./green.png')] bg-cover  justify-center"
      >
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
          <SpotlightCard
        title="Dijkistra's Algorithm"
        description="Visualize how Dijkstra's algorithm finds the shortest path in a graph, step by step."
        glowColor="bg-emerald-500/60 dark:bg-emerald-400/60"
        className="bg-[url('./ii.png')] bg-cover  justify-center"
      >
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
          <SpotlightCard
        title="Path Finding and Maze Generation"
        description="Understand how programs can generate mazes and find paths through them using various algorithms."
        glowColor="bg-emerald-500/60 dark:bg-emerald-400/60"
        className="bg-[url('./ib.png')] bg-cover  justify-center"
      >
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
      </SpotlightCard>
    </div>
  )
}