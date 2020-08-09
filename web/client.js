import sanityClient from '@sanity/client';

module.exports =  sanityClient({
  projectId: 'hp4xw9we',
  dataset: 'production',
  useCdn: true
})