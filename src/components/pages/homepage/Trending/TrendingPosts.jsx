import { Button } from "@/components/ui/button";
import React from "react";
import TrendingPost from "./TrendingPost";

const animePosts = [
  {
    message: "discussion",
    timeOfPost: "2 hours ago",
    numberOfComments: 25,
    title: "Is Naruto a better protagonist than Luffy?",
    content:
      "Naruto Uzumaki and Monkey D. Luffy are two iconic characters in the world of anime. Naruto has an inspiring story of perseverance and personal growth, while Luffy's carefree yet determined personality brings a lot of fun to One Piece. Both have their unique charms, but which one truly stands out as a protagonist? Let's dive deep and discuss their character arcs, strengths, and impact on their respective series!",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "OtakuMaster45",
  },
  {
    message: "general",
    timeOfPost: "5 hours ago",
    numberOfComments: 12,
    title: "Top 10 Slice of Life Anime to Watch",
    content:
      "Looking for some heartwarming slice of life anime recommendations? Here are my top 10 picks that bring the everyday joys, friendships, and emotions to life. From classics like Clannad and Toradora! to more recent hits like March Comes in Like a Lion, these shows offer an escape from reality and dive into the beauty of mundane life. Which slice of life anime is your favorite?",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "AnimeLover87",
  },

  {
    message: "question",
    timeOfPost: "1 hour ago",
    numberOfComments: 18,
    title: "Who would win: Saitama or Goku?",
    content:
      "A question as old as time! Saitama, the One Punch Man, is known for his unbeatable power, while Goku from Dragon Ball is constantly breaking his own limits. If these two titans clashed, who do you think would come out on top? Share your theories and reasons. And let's keep it friendly; we're all anime lovers here!",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "ShonenHeroFan",
  },
  {
    message: "recommendation",
    timeOfPost: "3 hours ago",
    numberOfComments: 8,
    title: "Anime Recommendations for Beginners",
    content:
      "Hey everyone! My friend is new to anime, and I’m trying to introduce them to the best ones to start with. I’m thinking of classic titles like Fullmetal Alchemist: Brotherhood, Attack on Titan, and My Hero Academia. But I want to make sure the list is diverse and includes a variety of genres. Any suggestions?",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "NewbieSensei",
  },
  {
    message: "review",
    timeOfPost: "4 hours ago",
    numberOfComments: 15,
    title: "Attack on Titan Finale: Was It Worth the Hype?",
    content:
      "Now that Attack on Titan has finally wrapped up, fans are divided on whether the ending did justice to the series. I just finished watching it, and honestly, I have mixed feelings. Without giving away spoilers, I think the themes and character arcs were resolved in a unique way, but it may not be for everyone. What are your thoughts on the final season?",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "AOTFanatic",
  },
  {
    message: "news",
    timeOfPost: "6 hours ago",
    numberOfComments: 30,
    title: "New Demon Slayer Movie Announced!",
    content:
      "Exciting news for Demon Slayer fans! A new movie has been announced, continuing the story after the Swordsmith Village arc. This time, the stakes seem higher than ever, with new characters and intense battles ahead. The animation by Ufotable is sure to be breathtaking once again. Who’s hyped for this next installment?",
    avatar:
      "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151278528.jpg?t=st=1730448330~exp=1730451930~hmac=3b58d95b52a8185278467f44849e2b15e21eddc0cff05129bc8fb32a5037634d&w=740",
    authorName: "AnimeNewsDaily",
  },
];

const TrendingPosts = () => {
  return (
    <div className="flex flex-col gap-4">
      {animePosts.map((animePost, index) => (
        <TrendingPost animePost={animePost} key={index} />
      ))}
      <Button>Read More</Button>
    </div>
  );
};

export default TrendingPosts;
