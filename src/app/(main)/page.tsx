'use client'

import { getAuthor, getPosts } from "@/sanity/sanity.query";
import { useEffect, useState } from "react";

export default function Home() {
  const [postData, setPostData] = useState([]);
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      const author = await getAuthor()
      setPostData(data);
      setAuthorData(author);
    })()
  }, []);

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
      }</h1>
    </>
  );
}

