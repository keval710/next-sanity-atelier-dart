import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getPosts() {
    return client.fetch(
        groq`*[_type == "post"]`
    );
}

export async function getAuthor() {
    return client.fetch(
        groq`*[_type == "author"]`
    );
}