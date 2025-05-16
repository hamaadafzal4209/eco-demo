/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Product } from "./product-section";

interface ProductCardProps {
  product: Product & { hoverImage?: string }; // added hoverImage
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const discountedPrice = product.discount
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(product.price * (1 - product.discount / 100))
    : null;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="block">
        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
          <img
            src={
              isHovered && product.hoverImage
                ? product.hoverImage
                : product.image || "/placeholder.svg"
            }
            alt={product.name}
            className="object-cover transition-transform duration-300"
          />

          {/* Wishlist Heart Icon */}
          <button
            onClick={handleFavoriteClick}
            className={cn(
              "absolute top-3 right-3 z-10 bg-white/80 rounded-full p-1 cursor-pointer",
              isFavorite ? "text-red-500" : "text-gray-700"
            )}
          >
            <Heart
              className={cn("h-5 w-5", isFavorite ? "fill-red-500" : "")}
            />
          </button>

          {/* Trending badge */}
          {product.isTrending && (
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Trending
            </div>
          )}

          {/* Discount badge */}
          {product.discount && (
            <div className="absolute bottom-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}

          {/* Quick actions */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3 flex justify-between items-center transition-transform duration-300",
              isHovered ? "translate-y-0" : "translate-y-full"
            )}
          >
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 mr-2 bg-black text-white hover:bg-black transition duration-300 cursor-pointer hover:text-white"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <div className="mt-1 flex items-center">
            {discountedPrice ? (
              <>
                <span className="text-sm font-medium text-red-600">
                  {discountedPrice}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  {formattedPrice}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-900">
                {formattedPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
