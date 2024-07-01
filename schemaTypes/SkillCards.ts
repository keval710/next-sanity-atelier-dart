import { defineField } from "sanity";

export default {
    name: 'skillCards',
    title: 'Skill Cards',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'skillCard',
            title: 'Skill Card',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    {
                        name: 'text',
                        title: 'Text',
                        type: 'text'
                    },
                    {
                        name: 'position',
                        title: 'Position',
                        type: 'string',
                    },
                    {
                        name: 'size',
                        title: 'Size (px)',
                        type: 'number',
                    },
                    {
                        name: 'textSize',
                        title: 'Text Size (px)',
                        type: 'number'
                    },
                    {
                        name: 'textColor',
                        title: 'Text Color',
                        type: 'color'
                    },
                    {
                        name: 'digitalContent',
                        title: 'Digital Content',
                        type: 'image',
                        options: {
                            hotspot: true,
                        },
                    }
                ],
            }],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        }
    }
};
