import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pzfi7b2jna01xndnxhcqmn/master',
  cache: new InMemoryCache()
});

export default apolloClient;