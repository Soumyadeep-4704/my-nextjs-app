import { posts } from "../../data/posts";
import { use } from "react";
import styles from "./Posts.module.css";
import Layout from "@/app/navigation";

export default function Post({ params }) {
  const usableParams = use(params);
  const post = posts.find((post) => post.id === usableParams.id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <Layout>
        <main className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.content}>{post.content}</p>
          <p>Your API Key: {process.env.NEXT_PUBLIC_API_KEY}</p>  {/* Must be hidden in real life scenario */}
        </main>
      </Layout>
    </>
  );
}
