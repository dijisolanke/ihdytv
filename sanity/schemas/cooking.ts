const cooking = {
    name: "cooking",
    title: "Cooking",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        }
        ,
        {
            name: "coverImage",
            title: "Cover Image",
            type: "image"
        }
        ,
        {
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            options: {
            accept: 'video/*', // Only allow video files
            },
        }
    ]

}


export default cooking;