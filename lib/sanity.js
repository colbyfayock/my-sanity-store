import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '5xqlmx5v',
  dataset: 'production',
  useCdn: true
});