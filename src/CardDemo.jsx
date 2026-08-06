import React from "react";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "@/components/ui/badge"

export default function CardDemo() {
  return (
    <div className="m-8 grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Huffman Coding</CardTitle>
          <CardDescription>
            Explore the concept of Huffman coding, a lossless data compression algorithm that uses variable-length codes for efficient encoding.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Ceaser's Cipher</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Sorting Algorithms</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Hash Functions and Collisons</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Dijisktras Algorithm</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <CardHeader>
          <CardAction>
            <Badge variant="secondary">Featured</Badge>
          </CardAction>
          <CardTitle>Path Finding and Maze Generation</CardTitle>
          <CardDescription>
            Understand the basics of encryption and decryption using the classic Ceaser's Cipher technique.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90 mr-5">
          Visualize
        </button>
        <button className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">
          Learn More
        </button>
        </CardFooter>
      </Card>

    
    </div>
  );
}
