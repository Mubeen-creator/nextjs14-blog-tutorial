import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blog-website',

  projectId: 'b8tet02e',
  dataset: 'productio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
