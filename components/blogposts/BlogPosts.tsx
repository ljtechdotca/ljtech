import { Title } from "@components/title/Title";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPosts.module.scss";

export interface IBlogPostsProps {
  className?: string;
  posts: IPostProps[];
  style?: React.CSSProperties;
  styleType?: string;
}

export interface IPostProps {
  alt: string;
  author: string;
  date: string;
  description: string;
  id: string;
  src: string;
  time: string;
  title: string;
}

export function BlogPosts({
  className,
  posts,
  style,
  styleType = "primary",
}: IBlogPostsProps) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <Title heading="Welcome to the ljtech Blog" styleType="primary__center">
        <p>
          Check out the ljtech blog for coding tutorials, design guides,
          informal insights and more
        </p>
        <br />
      </Title>
      <div className={styles.grid}>
        {posts.map((item) => (
          <Link href={`/posts/${item.id}`}>
            <a className={styles.card} key={item.id}>
              <div className={styles.thumbnail}>
                <Image
                  alt={item.alt}
                  className="fade"
                  draggable={false}
                  src={`/${item.src}`}
                  width={768}
                  height={200}
                />
              </div>
              <h3 className={styles.heading}>{item.title}</h3>
              <div className={styles.wrapper}>
                <span>{item.author}</span>
                <span>{item.date}</span>
                <span>{item.time}</span>
              </div>
              <p>{item.description}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
