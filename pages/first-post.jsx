import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const FirstPost = () => {
  return (
    <>
    <Head>
      <title>First Post</title>
    </Head>
      <div>first-post</div>
      {/* {/* If I wanted to add a new route /authors/me, what would the filename would be? (including the directory)
      
      pages/authors/me.js  
      
      */}
      <div>
        How do I make a new page?
      </div>
      <h2>
        <Link href={"/"}>Back home</Link>
      </h2>
      <ol>
        <li>Create next app using the bootstrap command</li>
        <li>Go to pages folder</li>
        <li>create a new file. The file name will be what the url will be.</li>
        <li>Go to that url.</li>
        <li><Link href={"/link"}>Go to Link page.</Link></li>
      </ol>

      <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
      />

    </>
  )
}

export default FirstPost;