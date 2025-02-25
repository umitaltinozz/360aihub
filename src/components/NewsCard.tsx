
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDistance } from "date-fns";
import { tr } from "date-fns/locale";

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
}

const NewsCard = ({ id, title, excerpt, category, imageUrl, publishedAt }: NewsCardProps) => {
  // Convert string date to Date object
  const publishDate = new Date(publishedAt);
  
  // Format date as relative time (e.g., "2 gün önce")
  const relativeTime = formatDistance(publishDate, new Date(), { 
    addSuffix: true,
    locale: tr 
  });

  return (
    <Link to={`/ai-news/${id}`} className="block">
      <Card className="glass card-hover h-full flex flex-col overflow-hidden">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs rounded bg-aihub-blue/90 text-white">
              {category}
            </span>
          </div>
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-lg font-medium line-clamp-2">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-white/70 line-clamp-3">{excerpt}</p>
        </CardContent>
        <CardFooter className="text-xs text-white/50 pt-0">
          {relativeTime}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsCard;
