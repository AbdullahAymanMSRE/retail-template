"use client";
import ratingStar from "@/assets/svg/rating-start.svg";

import user1 from "@/assets/user1.png";
import user2 from "@/assets/user2.png";

import Image from "next/image";

function Comment({
  user,
  comment,
}: {
  user: { image: any; name: string; job: string; stars: number };
  comment: string;
}) {
  return (
    <div className="comment">
      <p className="text">{comment}</p>
      <div className="user">
        <div className="user-info">
          <Image src={user.image} alt={user.name} />
          <div className="name-job">
            <p className="name">{user.name}</p>
            <p className="job">{user.job}</p>
          </div>
        </div>
        <div className="rating">
          {[...Array(user.stars)].map((i) => (
            <Image src={ratingStar} alt="star" key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Comments() {
  const comments = [
    {
      user: {
        name: "Rodrigo Duarte",
        job: "Graphic Designer",
        stars: 5,
        image: user1,
      },
      comment:
        "Our company uses Deupload, and I also use Box personally to store my documents, photos, videos, sensitive data etc. Deupload is amazing - so much more than just cloud storage. You can watch videos, share photos, scan documents, electronic sign and send documents, secure sensitive data and so much more.",
    },
    {
      user: {
        name: "Ivone Josan",
        job: "Marketing Assistant",
        stars: 5,
        image: user2,
      },
      comment:
        "I love using Deupload for work and personally because it is very intuitive to use and easy to share files with anyone. Our company moved from dropbox over to box, due to security purposes which would be my concern but other than that it syncs very quickly and allows collaboration and file sharing alot easier for your team/company.",
    },
  ];
  return (
    <section className="page comments">
      {comments.map((c) => (
        <Comment key={c.comment} user={c.user} comment={c.comment} />
      ))}
    </section>
  );
}
