import { BlogPosts } from "@components/blogposts/BlogPosts";
import { Meta } from "@components/meta/Meta";
import { getSortedPostsData } from "@lib/posts";
import styles from "@styles/Blog.module.scss";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Meta />
      <BlogPosts posts={allPostsData} />
    </div>
  );
}
