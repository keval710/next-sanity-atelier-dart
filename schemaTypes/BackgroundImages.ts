import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'BackgroundImages',
    title: 'Background Images',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'images',
            title: 'Background Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'altText',
                            type: 'string',
                            title: 'Alt Text',
                            description: 'Alternative text for accessibility and SEO.'
                        }
                    ]
                }
            ],
            options: {
                layout: 'grid'
            }
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'images.0.asset',
        }
    }
});
