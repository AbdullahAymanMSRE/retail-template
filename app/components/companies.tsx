import c1 from "@/assets/companies/image 3.png";
import c2 from "@/assets/companies/image 4.png";
import c3 from "@/assets/companies/image 5.png";
import c4 from "@/assets/companies/image 6.png";
import c5 from "@/assets/companies/image 7.png";
import c6 from "@/assets/companies/image 8.png";
import c7 from "@/assets/companies/image 9.png";
import c8 from "@/assets/companies/image 10.png";
import c9 from "@/assets/companies/image 11.png";
import c10 from "@/assets/companies/image 12.png";
import c11 from "@/assets/companies/image 13.png";
import c12 from "@/assets/companies/image 14.png";
import c13 from "@/assets/companies/image 15.png";
import c14 from "@/assets/companies/image 16.png";
import c15 from "@/assets/companies/image 17.png";
import c16 from "@/assets/companies/image 18.png";
import c17 from "@/assets/companies/image 19.png";
import c18 from "@/assets/companies/image 20.png";
import c19 from "@/assets/companies/image 21.png";
import c20 from "@/assets/companies/image 22.png";
import Image from "next/image";

export default function Companies() {
  const images = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
  ];

  return (
    <section className="page companies">
      <p className="title">Top company trust us</p>
      <div className="company-list">
        {images.map((img, idx) => (
          <div key={idx} className="img-back">
            <Image src={img} alt="company" />
          </div>
        ))}
      </div>
    </section>
  );
}
