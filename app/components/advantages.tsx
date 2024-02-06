import advImage from "@/assets/svg/hero2.svg";
import globalizeImg from "@/assets/svg/globalize.svg";
import delightImg from "@/assets/svg/delight.svg";
import enhanceImg from "@/assets/svg/enhance.svg";

import Image from "next/image";

function Advantage({
  icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) {
  return (
    <div className="advantage">
      <Image src={icon} alt={title} />
      <article className="advantage-content">
        <h4 className="advantage-title">{title}</h4>
        <p className="advantage-text">{content}</p>
      </article>
    </div>
  );
}

export default function Advantages() {
  return (
    <section className="page adv">
      <div className="main">
        <div className="adv-list">
          <Advantage
            icon={globalizeImg}
            title="Globalize your marketing"
            content="Utilize Deupload as your go-to platform for global product marketing, facilitating collaboration and content management across multiple retail channels."
          />
          <Advantage
            icon={delightImg}
            title="Delight your customers"
            content="Utilize Deupload as your go-to platform for global product marketing, facilitating collaboration and content management across multiple retail channels."
          />
          <Advantage
            icon={enhanceImg}
            title="Enhance cost-cutting"
            content="Utilize Deupload as your go-to platform for global product marketing, facilitating collaboration and content management across multiple retail channels."
          />
        </div>
        <Image src={advImage} alt="advantages" />
      </div>
    </section>
  );
}
