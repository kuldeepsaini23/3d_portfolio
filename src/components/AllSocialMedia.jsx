import React from "react";
import { BsTwitter, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import {
  SiLeetcode,
  SiHackerrank,
  SiGeeksforgeeks,
  SiValorant,
} from "react-icons/si";

const AllSocialMedia = () => (
  <div className="flex flex-row gap-10 flex-wrap">
    <div className="text-secondary border-2 rounded-full border-secondary p-4 hover:border-blue-600 hover:text-blue-600">
      <a
        href="https://www.facebook.com/diagofx"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookF size={50} />
      </a>
    </div>

    <div className="text-secondary border-2 rounded-full border-secondary p-4 hover:border-blue-400 hover:text-blue-400">
      <a
        href="https://twitter.com/fx_diago"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter size={50} />
      </a>
    </div>

    <div className="text-secondary border-2 rounded-full border-secondary p-4 hover:border-pink-600 hover:text-pink-600">
      <a
        href="https://www.instagram.com/di3go.fx"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram size={50} />
      </a>
    </div>

    <div className="text-secondary border-2 rounded-full border-secondary p-4 hover:border-red-600 hover:text-red-600">
      <a
        href="https://www.youtube.com/channel/UCzmCGl3aJRqCN1iOJRHf7Xw"
        target="_blank"
        rel="noreferrer"
      >
        <BsYoutube size={50} />
      </a>
    </div>

    {/* <div>
      <a href="https://tracker.gg/valorant/profile/riot/deku%232311/overview" target="_blank" rel="noreferrer">
        <SiValorant />
      </a>
    </div> */}

    {/* <a>
    <FontAwesomeIcon icon="fa-brands fa-instagram" beatFade style={{color: "#f702e3",}} />
    </a>

    <a></a>

    <a></a>

    <a></a> */}
  </div>
);

export default AllSocialMedia;
