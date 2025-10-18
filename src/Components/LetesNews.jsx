import React from "react";
import Marquee from "react-fast-marquee";

const LetesNews = () => {
  return (
    <div className="flex gap-5 bg-base-200 px-4 py-4 items-center">
      <p className="text-base-100 bg-secondary p-2">Latest</p>
      <Marquee pauseOnHover={true} speed={60} className="font-semibold">
        <p className="mr-10">
          📰 Match Highlights: Germany vs Spain — as it happened!
        </p>
        <p className="mr-10">
          ⚽ Lionel Messi scores twice as Inter Miami wins 3–1 over LA Galaxy.
        </p>
        <p className="mr-10">
          🏆 Bangladesh clinches T20 series against Sri Lanka by 2–1!
        </p>
        <p className="mr-10">
          🌍 Global climate summit kicks off in Dubai — world leaders gather to
          discuss future plans.
        </p>
        <p className="mr-10">
          💻 Apple launches new M4 MacBook — faster, cooler, and smarter!
        </p>
      </Marquee>
    </div>
  );
};

export default LetesNews;
