import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
  projectId:'cvtf3s2u',
  dataset: 'production',
  apiVersion:'2022-02-01',
  useCdn: true,
  token: 'skaBMgDlqZjoDCkrVciy7HM1Q7A3EkJ9JUjFhqZssxQUqngXpHAmEyRKk7OHPeF4pPRZCzmeUYlVvfaoA36NMk1r9WZAiQLSsUxqipjifyYrrKsXfcfoGpZkL8TxQfm08un5RdnszOWEzfC7LnD8ZXZVcTa3TBxyEoLSmUcFN2cQbo2WtxcI',
})

const builder  = imageUrlBuilder(client);

export const urlFor = (Source)=> builder.image(Source);