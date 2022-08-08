This repository contains the source code of Spotify clone app created for educational purposes.

## How to run locally?

First, you have to create an `.env.local` file in the root of the project and set the following environment variables. You can acquire Client ID and Client Secret from [Spotify for Developers](https://developer.spotify.com/dashboard/) by creating a new application in your dashboard.

```bash
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_CLIENT_ID=<your spotify client-id>
NEXT_PUBLIC_CLIENT_SECRET=<your spotify client-secret>
JWT_SECRET=HowDoYouTurnThisOn
```
> **Note**: You also need to set `Redirect URIs` to `http://localhost:3000/api/auth/callback` in your application settings.


Then, you can run the following command to start the server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
