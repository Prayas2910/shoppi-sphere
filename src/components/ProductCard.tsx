import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image_url: string;
  category?: string;
  onAddToCart: () => void;
}

const ProductCard = ({ id, name, price, image_url, category, onAddToCart }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
      <CardContent className="p-0" onClick={() => navigate(`/product/${id}`)}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image_url}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          {category && (
            <span className="text-xs font-medium text-muted-foreground uppercase">
              {category}
            </span>
          )}
          <h3 className="mt-2 font-semibold text-lg">{name}</h3>
          <p className="mt-2 text-2xl font-bold">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
