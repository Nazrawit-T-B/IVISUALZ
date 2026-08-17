import React from "react";
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
import { Separator } from "@/components/ui/separator";
export default function CardDemo() {
  return (
    <div className="m-5 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Huffman Coding</CardTitle>
          <CardDescription className="flex-grow">
            Explore the concept of Huffman coding, a lossless data compression
            algorithm that uses variable-length codes for efficient encoding.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <Link to="/visualize/huffman">
            <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
              Visualize
            </button>
          </Link>
<Link to="/learn/huffman">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
          </Link>
        </CardFooter>
      </Card>
      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="./i3.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Ceaser's Cipher</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <Link to="/visualize/ceasersCipher">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
            Visualize
          </button>
          </Link>
          <Link to="/learn/ceasersCipher">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
          </Link>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="./i4.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle className="flex-grow">Sorting Algorithms</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
            Visualize
          </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="./i5.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Hash Functions and Collisons</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
            Visualize
          </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="./i2.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Dijisktras Algorithm</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
            Visualize
          </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0 flex flex-col h-full">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="./i5.png"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader className="flex flex-col flex-grow">
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Path Finding and Maze Generation</CardTitle>
          <CardDescription className="flex-grow">
            Understand the basics of encryption and decryption using the classic
            Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto flex gap-3">
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
            Visualize
          </button>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
            Learn More
          </button>
        </CardFooter>
      </Card>
        <Separator className="bg-gray-900 my-1" />
    </div>
    
  );
}
