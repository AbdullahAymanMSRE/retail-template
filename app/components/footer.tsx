import secureBadge from "@/assets/svg/secure-badge.svg";

import facebookIcon from "@/assets/svg/facebook.svg";
import twitterIcon from "@/assets/svg/twitter.svg";
import youtubeIcon from "@/assets/svg/youtube.svg";
import mediumIcon from "@/assets/svg/medium.svg";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const linksLists: {
    title: string;
    links: { name: string; href?: string }[];
  }[] = [
    {
      title: "Products",
      links: [
        { name: "Features" },
        { name: "Solutions" },
        { name: "Pricing" },
        { name: "Token" },
        { name: "Security" },
        { name: "Comparison" },
      ],
    },
    {
      title: "Resource",
      links: [
        { name: "Whitepaper" },
        { name: "Developer" },
        { name: "Brand Kits" },
        { name: "Compliance" },
        { name: "Privacy Policy" },
        { name: "Terms of service" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Guide" },
        { name: "Blog" },
        { name: "FAQs" },
        { name: "Forum" },
        { name: "Help center" },
        { name: "Support desk" },
      ],
    },
  ];
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="about">
          <p className="title">What is Deupload?</p>
          <p className="text">
            Deupload is a cloud storage services based on Blockchain and Web3
            technology, designed to help teams collaborate and file sharing in a
            completely private like never before.
          </p>
          <Image src={secureBadge} alt="secure badge" />
        </div>
        <div className="links-lists">
          {linksLists.map((ll, i) => (
            <div key={i} className="links-list">
              <p className="title">{ll.title}</p>
              <ul className="links">
                {ll.links.map((l) => (
                  <li key={l.name}>
                    <Link href={l.href ?? ""}>{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-footer">
        <p>© 2024 Deupload. Powered by Conikal LLC</p>
        <div className="social-row">
          <Link href="">
            <Image src={facebookIcon} alt="facebook" />
          </Link>
          <Link href="">
            <Image src={twitterIcon} alt="twitter" />
          </Link>
          <Link href="">
            <Image src={youtubeIcon} alt="youtube" />
          </Link>
          <Link href="">
            <Image src={mediumIcon} alt="medium" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
