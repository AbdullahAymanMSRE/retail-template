import Image from "next/image";
import dataIcon from "@/assets/svg/data.svg";
import recoverIcon from "@/assets/svg/recover.svg";
import twoFactorIcon from "@/assets/svg/two-factor.svg";

function Item({
  icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="item">
      <Image src={icon} alt={title} />
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}

export default function Operations() {
  return (
    <section className="page operations">
      <header>
        <p className="title">Streamlined operations with better security</p>
        <p className="text">
          Retail data management involves handling vast amounts of information
          due to the constant influx of customers and diverse product offerings.
          To safeguard your customer data, stock information, and other crucial
          business resources, Deupload provides top-notch security and data
          governance models.
        </p>
      </header>
      <div className="items">
        <Item
          icon={dataIcon}
          title="Enable internal data control"
          text="Maintain controlled data visibility by setting appropriate profile and data access limits for your employees and stakeholders."
        />
        <Item
          icon={recoverIcon}
          title="Recover your last data"
          text="We actively encrypt data and back them up every week. Accidental data losses can be recovered instantly by  restoring data from the backups."
        />
        <Item
          icon={twoFactorIcon}
          title="Two-factor authentication"
          text="Mitigate unauthorized access to accounts by mandating additional verification every time your employees sign in to their accounts."
        />
      </div>
    </section>
  );
}
