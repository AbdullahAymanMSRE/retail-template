import Image from "next/image";
import elevateImg from "@/assets/svg/elevate.svg";

export default function Elevate() {
  return (
    <section className="page elevate">
      <div className="container">
        <div className="content">
          <p className="title">Elevate retail file management</p>
          <p className="text">
            Upgrade your retail file management game with our online solution
            and streamline your operations for improved efficiency and
            profitability. Try it out now!
          </p>
          <div className="btns">
            <button className="btn">Get Started</button>
            <button className="btn deflated">Get 10$ credit</button>
          </div>
        </div>
        <Image src={elevateImg} alt="elevate" />
      </div>
    </section>
  );
}
