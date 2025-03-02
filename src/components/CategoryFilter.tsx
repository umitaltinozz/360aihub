
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant="ghost"
          onClick={() => onCategoryChange(category)}
          className={selectedCategory === category ? "filter-active" : "filter-inactive"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
