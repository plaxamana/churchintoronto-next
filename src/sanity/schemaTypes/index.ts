import { type SchemaTypeDefinition } from 'sanity'
import { personType } from './personType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [personType],
}
