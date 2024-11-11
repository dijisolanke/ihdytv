import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from './sanity/schemas'


const config = defineConfig({
    projectId: "ve9ue5oy",
    dataset: "production",
    title: "ihdytv",
    apiVersion: "2024-10-11",
    basePath: "/admin",
    plugins: [structureTool()],
    schema: {types : schemas}
})

export default config;