import { BlogPost } from "@components/blogpost/BlogPost";
import { Meta } from "@components/meta/Meta";
import { getAllPostIds, getPostData } from "@lib/posts";
import { whois } from "@lib/whois";
import styles from "@styles/Blog.module.scss";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ postData }) {
  return (
    <div className={styles.container}>
      <Meta
        images={[
          {
            alt: postData.alt,
            height: 200,
            url: `https://${whois.domain}/${postData.src}`,
            width: 768,
          },
        ]}
      />
      <BlogPost post={postData} />
    </div>
  );
}
