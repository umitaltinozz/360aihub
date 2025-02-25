
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onCategoryChange(category)}
          className={activeCategory === category ? "filter-active" : "filter-inactive"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
