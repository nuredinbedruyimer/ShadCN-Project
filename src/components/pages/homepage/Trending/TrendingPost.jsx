import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircleIcon } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TrendingPost = ({ animePost }) => {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="">
        <div className="flex flex-row justify-between">
          <CardDescription>#{animePost.message}</CardDescription>
          <CardDescription>{animePost.timeOfPost}</CardDescription>
          <CardDescription className="flex gap-1">
            <MessageCircleIcon size={16} />
            {animePost.numberOfComments}
          </CardDescription>
        </div>

        <CardTitle className=" text-[16px] font-bold text-lime-500">
          {animePost.title}
        </CardTitle>
      </CardHeader>
      <CardContent>{animePost.content.slice(0, 50)}</CardContent>
      <CardFooter className="w-1/2 flex gap-4">
        <Avatar className="h-12 w-12 rounded-full">
          <AvatarFallback>{animePost.authorName}</AvatarFallback>
          <AvatarImage src={animePost.avatar} />
        </Avatar>
        <NavLink>{animePost.authorName.slice(0, 5)}</NavLink>
      </CardFooter>
    </Card>
  );
};

export default TrendingPost;
