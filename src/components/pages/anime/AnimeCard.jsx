import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../../ui/button";

const AnimeCard = ({ anime }) => {
  return (
    <Card className="flex flex-col justify-between shadow-md">
      <CardHeader>
        <div className="flex items-center gap-6">
          <Avatar>
            <AvatarFallback>{anime.title.substring(0, 1)}</AvatarFallback>
            <AvatarImage src={anime.image} className="h-24 w-24 rounded-full" />
          </Avatar>
          <div>
            <CardTitle className="text-blue-600">
              {anime.title.substring(0, 15)}
            </CardTitle>
            <CardDescription>{anime.time} to be streamed</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{anime.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Read More</Button>
        <span
          className={
            anime.completed
              ? `text-md text-green-600 font-bold`
              : `text-yellow-500 text-md font-bold`
          }
        >
          {anime.completed ? "Finished" : "Ongoing"}
        </span>
      </CardFooter>
    </Card>
  );
};

export default AnimeCard;
