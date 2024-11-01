import React from "react";
import QA from "./QA";

const faq = [
  {
    question: "What is the best website to watch anime legally?",
    answer:
      "There are several great websites to watch anime legally, including Crunchyroll, Funimation, Netflix, and Hulu. Crunchyroll and Funimation offer a large selection of anime, often with both dubbed and subbed options. Netflix and Hulu also have a growing library of popular anime titles.",
  },
  {
    question: "What is the difference between subbed and dubbed anime?",
    answer:
      "Subbed anime has the original Japanese audio with subtitles in another language, allowing you to hear the original voices and expressions. Dubbed anime has voice actors speaking in a different language, like English, which can make it easier to watch without reading subtitles. Preferences vary, as some fans prefer the authenticity of subs, while others enjoy the accessibility of dubs.",
  },
  {
    question: "Where can I find information on upcoming anime releases?",
    answer:
      "Websites like MyAnimeList, AniList, and Anime News Network provide information on upcoming anime releases, including release dates, trailers, and production details. These sites are updated regularly and cover both Japanese and international releases, making them excellent resources for keeping up with new anime.",
  },
  {
    question: "How can I get recommendations for anime to watch?",
    answer:
      "There are many ways to get anime recommendations. Websites like MyAnimeList and AniList allow users to rate and review shows, helping you discover popular and highly-rated anime. You can also join anime communities on Reddit or Discord, where members share recommendations based on genre, mood, or themes. For personalized suggestions, consider using online recommendation tools or quizzes.",
  },
];

const AboutNAnime = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Do you know that according to Google, the monthly search volume for
        anime related topics is up to over 1 Billion times? Anime is famous
        worldwide and it is no wonder we've seen a sharp rise in the number of
        free anime streaming sites. Just like free online movie streaming sites,
        anime watching sites are not created equally, some are better than the
        rest, so we've decided to build HiAnime.to to be one of the best free
        anime streaming site for all anime fans on the world.
      </p>
      {faq.map((questionAndAnswer, index) => (
        <QA questionAndAnswer={questionAndAnswer} key={index} />
      ))}
    </div>
  );
};

export default AboutNAnime;
