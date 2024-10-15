import React from "react";
import { DocumentText1, Link2 } from "iconsax-react";
import Button from "./Button";
import Link from "next/link";

const ResumeCard = () => {
  return (
    <div className="base-card flex items-center justify-center max-container:order-3">
      <div className="flex items-center gap-3">
        <DocumentText1 color="#939DB8" className="w-12 h-12" />
        <h4 className="font-bold text-3xl">CV</h4>
        <span className="absolute bottom-3 left-3">
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button icon={<Link2 />} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ResumeCard;
