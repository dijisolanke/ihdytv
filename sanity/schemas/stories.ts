const stories = {
    name: "stories",
    title: "Stories",
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
            name: 'audio',
            title: 'Audio',
            type: 'file',
            options: {
              accept: 'audio/*', // Only allow video files
            }
          },
    ]

}


export default stories;