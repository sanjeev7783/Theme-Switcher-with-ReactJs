import { useState, useEffect } from 'react'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...')
        const response = await fetch('https://fakestoreapi.com/products?limit=6', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log('Response status:', response.status)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log('Products fetched:', data.length)
        setProducts(data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'An error occurred')
        // Fallback mock data for GitHub Pages
        const mockProducts = [
          {
            id: 1,
            title: "Sample Product 1",
            price: 29.99,
            description: "This is a sample product",
            category: "electronics",
            image: "https://via.placeholder.com/300x300?text=Product+1",
            rating: { rate: 4.5, count: 120 }
          },
          {
            id: 2,
            title: "Sample Product 2",
            price: 39.99,
            description: "This is another sample product",
            category: "clothing",
            image: "https://via.placeholder.com/300x300?text=Product+2",
            rating: { rate: 4.2, count: 85 }
          },
          {
            id: 3,
            title: "Sample Product 3",
            price: 19.99,
            description: "Third sample product",
            category: "books",
            image: "https://via.placeholder.com/300x300?text=Product+3",
            rating: { rate: 4.8, count: 200 }
          }
        ]
        setProducts(mockProducts)
        setError(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}