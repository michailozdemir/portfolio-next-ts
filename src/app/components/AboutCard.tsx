import Image from "next/image";
import React from "react";

const AboutCard = () => {
  return (
    <div className="base-card md:col-span-2">
      <Image src="/images/profile-image.jpg" width="70" height="70" className="rounded-full mb-6" alt="Profile image" />
      <h2 className="text-2xl font-semibold mb-2">Michail Ozdemir</h2>
      <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-light">
        Front-End developer from Ukraine, based in Warsaw. Interested in developing useful products, crypto & BMW.
        Currently work as a Front-End Developer in SimplyBook.me 🙃
      </p>
    </div>
  );
};

export default AboutCard;
