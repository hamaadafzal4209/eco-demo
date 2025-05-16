import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"

export type Product = {
  id: string
  name: string
  price: number
  image: string
  hoverImage: string,
  category: string
  isTrending?: boolean
  discount?: number
}

// Sample product data
const products: Product[] = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Clothing",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Clothing",
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Outerwear",
  },
  {
    id: "4",
    name: "Running Shoes",
    price: 89.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Footwear",
  },
//   {
//     id: "5",
//     name: "Casual Backpack",
//     price: 49.99,
//    image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
//     hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
//     category: "Accessories",
//   },
//   {
//     id: "6",
//     name: "Wireless Headphones",
//     price: 129.99,
//    image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
//     hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
//     category: "Electronics",
//   },
//   {
//     id: "7",
//     name: "Sunglasses",
//     price: 79.99,
//    image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
//     hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
//     category: "Accessories",
//   },
//   {
//     id: "8",
//     name: "Wristwatch",
//     price: 149.99,
//    image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
//     hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
//     category: "Accessories",
//   },
]

// Trending products with special pricing and badges
const trendingProducts: Product[] = [
  {
    id: "9",
    name: "Limited Edition Sneakers",
    price: 129.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Footwear",
    isTrending: true,
    discount: 15,
  },
  {
    id: "10",
    name: "Designer Handbag",
    price: 299.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Accessories",
    isTrending: true,
  },
  {
    id: "11",
    name: "Smart Fitness Watch",
    price: 179.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Electronics",
    isTrending: true,
    discount: 20,
  },
  {
    id: "12",
    name: "Premium Hoodie",
    price: 89.99,
   image: "https://cdn-images.farfetch-contents.com/26/68/00/10/26680010_56379844_600.jpg",
    hoverImage: "https://cdn-images.farfetch-contents.com/30/22/59/79/30225979_59241187_600.jpg",
    category: "Clothing",
    isTrending: true,
  },
]


interface ProductSectionProps {
  title?: string
  trendingTitle?: string
  showViewAll?: boolean
}

export function ProductSection({
  title = "New in: handpicked daily from the world’s best brands and boutiques",
  trendingTitle = "🔥 Trending Now",
  showViewAll = true,
}: ProductSectionProps) {
  return (
    <div className="container mx-auto px-6 py-12 pt-6">
      {/* Featured Products Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-normal">{title}</h2>
          {showViewAll && (
            <Button variant="outline" size="sm">
              View All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Trending Products Section */}
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{trendingTitle}</h2>
          {showViewAll && (
            <Button variant="outline" size="sm">
              View All
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
