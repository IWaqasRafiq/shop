
import { defineField, defineType } from "sanity";

export const shop = defineType({
    name: "shop",
    title: "blog",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "title",
            type: "string"
        }),
        {
            name : "price",
            title : "Price",
            type : "number"
        },
        {
            name : "image",
            title : "Image",
            type : "array",
            of : [{type : "image"}]
        }
    ]

})