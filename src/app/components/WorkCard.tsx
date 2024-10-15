import React from "react";
import Image from "next/image";
import { Briefcase } from "iconsax-react";

const WorkCard = () => {
  return (
    <div className="base-card">
      <div className="flex items-center gap-2 mb-6">
        <Briefcase color="#939DB8" />
        <h4 className="font-bold">Work</h4>
      </div>
      <ul className="grid gap-6">
        <li className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logos/sb-logo.svg" alt="Metric Insights" width="35" height="35" />
            <div className="grid gap-1.5">
              <h5 className="font-semibold leading-tight">SimplyBook.me</h5>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
                Front End Developer
              </p>
            </div>
          </div>
          <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
            Aug 2021 - Present
          </span>
        </li>
        <li className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logos/sb-logo.svg" alt="Metric Insights" width="35" height="35" />
            <div className="grid gap-1.5">
              <h5 className="font-semibold leading-tight">SimplyBook.me</h5>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
                HTML Coder & Developer
              </p>
            </div>
          </div>
          <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
            2018 - Aug 2021
          </span>
        </li>
        <li className="flex items-end justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logos/weblium-logo.svg" alt="Metric Insights" width="35" height="35" />
            <div className="grid gap-1.5">
              <h5 className="font-semibold leading-tight">Weblium</h5>
              <p className=" text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
                HTML Coder / Designer
              </p>
            </div>
          </div>
          <span className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-light leading-tight">
            2017 - 2018
          </span>
        </li>
      </ul>
    </div>
  );
};

export default WorkCard;
