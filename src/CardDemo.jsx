import AlgorithmCard from "@/components/AlgorithmCard";
import { algorithms } from "@/data/algorithms";

export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {algorithms.map((algorithm) =>
        algorithm.featured ? (
          <AlgorithmCard key={algorithm.id} algorithm={algorithm} />
        ) : null
      )}
    </div>
  );
}