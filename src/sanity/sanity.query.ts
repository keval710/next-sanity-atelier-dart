import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getBacImages() {
    try {
        const images = await client.fetch(
            groq`*[_type == "BackgroundImages"] {
                title,
                images
            }`
        );
        return images;
    } catch (error) {
        console.error("Error fetching images from Sanity:", error);
        return [];
    }
}

export async function getMenus() {
    try {
        const menus = await client.fetch(
            groq`*[_type == "menus"] {
                title, 
                menu
            }`
        );    
        return menus;
    } catch (error) {
        console.error("Error fetching images from Sanity:", error);
        return [];
    }
}

export async function getSkillCards() {
    try {
        const skillCards = await client.fetch(
            groq`*[_type == "skillCards"]`
        );
        return skillCards;
    } catch (error) {
        console.error("Error fetching images from Sanity:", error);
        return [];
    }
}