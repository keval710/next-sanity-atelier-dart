import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    apiVersion: "2024-07-09"
};

const client = createClient(config);

export default client;