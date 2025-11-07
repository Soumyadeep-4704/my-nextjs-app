import Link from "next/link";
import Layout from "./navigation";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <h1 className="text-3xl font-bold mb-6 text-blue-800">Welcome to our homepage</h1> 
          <Link href="/about">About-Us</Link>
          <Link href="/posts/1">Go to Post 1</Link>
          <Link href="/posts/2">Go to Post 2</Link>
        </div>  
        <p>Your API Key: {process.env.NEXT_PUBLIC_API_KEY}</p>  {/* Must be hidden in real life scenario */}
      </Layout>
    </>    
  );
}