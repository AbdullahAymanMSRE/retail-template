import Image from "next/image";
import heroImage from "@/assets/svg/hero.svg";

export default function Hero() {
  return (
    <section className="page hero">
      <div className="content">
        <p className="title">
          Content management system optimized for retail businesses
        </p>
        <p className="text">
          Deupload enables efficient data management with robust security
          measures, allowing for real-time storage, management, and analysis of
          sales reports, customer feedback, and inventory information, thereby
          eliminating the difficulties associated.
        </p>
        <div className="btns">
          <button className="btn">Getting Started</button>
          <button className="btn deflated">Learn More</button>
        </div>
      </div>
      <Image className="hero-image" src={heroImage} alt="hero" />
    </section>
  );
}
