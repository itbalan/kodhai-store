import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Kodhai-Store</title>
        <meta
          name="description"
          content="The ecommerce website by Next and Sanity"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Kodhai-Store
      </Typography>
    </div>
  );
}
