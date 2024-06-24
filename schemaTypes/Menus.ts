import { defineField } from "sanity";

export default {
    name: 'menus',
    title: 'Menus',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'menu',
            title: 'Menu',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'menuName',
                            title: 'Menu Name',
                            type: 'string',
                        },
                        {
                            name: 'menuUrl',
                            title: 'Menu URL',
                            type: 'url',
                        },
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
};
