import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const AlgorithmCard = ({ algorithm }) => {
  return (
    <Card className="relative mx-auto flex h-full w-full max-w-sm flex-col border border-black/10 bg-[#fffdf9] pt-0">

      <div className="absolute inset-0 z-30 aspect-video bg-black/15" />

      <img
        src={algorithm.image}
        alt={algorithm.name}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
      />

      <CardHeader className="flex flex-grow flex-col pt-4">

        <CardAction>
          <Badge
            variant="secondary"
            className="rounded-full border border-black/10 bg-[#f4ede4] text-black"
          >
            {algorithm.category}
          </Badge>
        </CardAction>

        <CardTitle>{algorithm.name}</CardTitle>

        <CardDescription className="flex-grow">
          {algorithm.description}
        </CardDescription>

      </CardHeader>

      <CardFooter className="mt-auto flex gap-3 pt-4">

        <Link to={`/visualize/${algorithm.id}`}>
          <button className="bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e]">
            Visualize
          </button>
        </Link>

        <Link to={`/learn/${algorithm.id}`}>
          <button className="border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
            Learn More
          </button>
        </Link>

      </CardFooter>

    </Card>
  );
};

export default AlgorithmCard;