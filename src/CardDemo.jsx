import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle>Huffman Coding</CardTitle>
          <CardDescription className="flex-grow">
            Explore the concept of Huffman coding, a lossless data compression
            algorithm that uses variable-length codes for efficient encoding.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <Link to="/visualize/huffman">
            <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
              Visualize
            </button>
          </Link>
          <Link to="/learn/huffman">
            <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
              Learn More
            </button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="./i3.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle>Ceaser's Cipher</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <Link to="/visualize/ceasersCipher">
            <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
              Visualize
            </button>
          </Link>
          <Link to="/learn/ceasersCipher">
            <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
              Learn More
            </button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="./i4.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle className="flex-grow">Sorting Algorithms</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
            Visualize
          </button>
          <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="./i5.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle>Hash Functions and Collisons</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
            Visualize
          </button>
          <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="./i2.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle>Dijisktras Algorithm</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
            Visualize
          </button>
          <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full border border-black/10 bg-[#fffdf9]">
        <div className="absolute inset-0 z-30 aspect-video bg-black/15" />
        <img
          src="./i5.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow pt-4">
          <CardAction>
            <Badge variant="secondary" className="rounded-full border border-black/10 bg-[#f4ede4] text-black">Featured</Badge>
          </CardAction>
          <CardTitle>Path Finding and Maze Generation</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3 pt-4">
          <button className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-[#d9773e] mr-5">
            Visualize
          </button>
          <button className="rounded-md border border-black/15 bg-transparent px-4 py-2 text-sm text-black hover:bg-[#f4ede4]">
            Learn More
          </button>
        </CardFooter>
      </Card>
    </div>
    
  );
}
