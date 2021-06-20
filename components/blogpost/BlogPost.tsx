import { Title } from "@components/title/Title";
import Image from "next/image";
import styles from "./BlogPost.module.scss";

export interface IBlogPostProps {
  className?: string;
  post: IPostProps;
  style?: React.CSSProperties;
  styleType?: string;
}

export interface IPostProps {
  alt: string;
  author: string;
  contentHtml: any;
  date: string;
  description: string;
  src: string;
  time: string;
  title: string;
}

export function BlogPost({
  className,
  post,
  style,
  styleType = "primary",
}: IBlogPostProps) {
  return (
    <div
      className={[className, styles[styleType]].filter(Boolean).join(" ")}
      style={style}
    >
      <Title heading={post.title} styleType="primary__center" />
      <div className={styles.thumbnail}>
        <Image src={`/${post.src}`} width={768} height={200} />
      </div>
      <div className={styles.wrapper}>
        <span>{post.author}</span>
        <span>{post.date}</span>
        <span>{post.time}</span>
      </div>
      <p className={styles.description}>{post.description}</p>
      <br />
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
