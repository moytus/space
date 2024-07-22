import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
    name: 'Article',
    filePathPattern: `**/*.md`,
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'date', required: true },
        updatedAt: { type: 'date', required: false },
    },
    computedFields: {
        id: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, ''),
        },
    }
}))

export default makeSource({
  contentDirPath: './src/articles',
  documentTypes: [Article],
})
