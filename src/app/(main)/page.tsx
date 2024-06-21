'use client'

import { getAuthor, getPosts } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";
import { useNextSanityImage } from 'next-sanity-image';
import client from "@/sanity/sanity.client";

export default function Home() {
  const [postData, setPostData] = useState([]);
  const [authorData, setAuthorData] = useState([]);
  const imageProps = useNextSanityImage(client, postData[0]?.mainImage);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      const author = await getAuthor()
      setPostData(data);
      setAuthorData(author);
    })()
  }, []);
  console.log(imageProps)

  console.log('post......', postData)
  console.log('authorData......', authorData)

  return (
    <>
      <h1>{
        postData && postData.map((res: { title: string }) => {
          return (<>
            <h1 className="m-7">
              {res?.title}
            </h1>
          </>)
        })
      }
      <img src={imageProps?.src} height={10} width={500} />
      </h1>
    </>
  );
}

