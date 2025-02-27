
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface QuickAccessCardProps {
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
  color: "blue" | "purple" | "green" | "orange";
}

const QuickAccessCard = ({
  title,
  description,
  link,
  icon: Icon,
  color,
}: QuickAccessCardProps) => {
  const getColorClasses = () => {
    switch (color) {
      case "blue":
        return "from-blue-500/10 to-blue-700/10 border-blue-500/20 hover:border-blue-500/30 [&_svg]:text-blue-500";
      case "purple":
        return "from-purple-500/10 to-purple-700/10 border-purple-500/20 hover:border-purple-500/30 [&_svg]:text-purple-500";
      case "green":
        return "from-green-500/10 to-green-700/10 border-green-500/20 hover:border-green-500/30 [&_svg]:text-green-500";
      case "orange":
        return "from-orange-500/10 to-orange-700/10 border-orange-500/20 hover:border-orange-500/30 [&_svg]:text-orange-500";
      default:
        return "from-blue-500/10 to-blue-700/10 border-blue-500/20 hover:border-blue-500/30 [&_svg]:text-blue-500";
    }
  };

  return (
    <Link to={link}>
      <div
        className={`p-6 rounded-xl border bg-gradient-to-br ${getColorClasses()} transition-all hover:shadow-lg card-hover`}
      >
        <div className="mb-4">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/70">{description}</p>
      </div>
    </Link>
  );
};

export default QuickAccessCard;
