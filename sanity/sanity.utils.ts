import { createClient, groq,  } from "next-sanity";

export async function getMusic (){
    const client = createClient({
        projectId: "ve9ue5oy",
        dataset: "production",
        apiVersion: "2024-10-11",
    });

    return client.fetch(
        groq`*[_type == "music"]{
            title,
            coverImage {
                asset->{
                    _id,
                    url
                }
            },
            videoFile {
                asset->{
                    _id,
                    url
                }
            }
        }`
    );
}