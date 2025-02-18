export const AuthJSMD = `
> Note: Previously named \`Next Auth\` now changed into [\`Auth JS\`](https://authjs.dev/) because, Auth JS now can be implemented in any Node JS frameworks, not exclusive for Next JS.

install package using \`npm install next-auth@beta\`
> Warning: this version is still beta, please check the website first if there any release version!

setup AUTH_SECRET in .env.local (for Next JS Development) using this cli
\`\`\`
npx auth secret
\`\`\`

create \`auth.ts\` in root directory and copy this following code
\`\`\`ts
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
})
\`\`\`

create \`middleware.ts\` for project middleware
\`\`\`ts
export { auth as middleware } from "@/auth"
\`\`\`

setup session provider in \`/providers/SessionProvider.tsx\` to access session data in client-side
\`\`\`tsx
import { NextPage } from 'next'
import { ReactNode } from 'react'
import { SessionProvider as AuthSessionProvider } from "next-auth/react"
interface Props { children: ReactNode }
const SessionProvider: NextPage<Props> = ({ children }) => {
    return <AuthSessionProvider>
        {children}
    </AuthSessionProvider>
}

export default SessionProvider
\`\`\`

For simplicity, setup for google signIn can refer to OAuth2 in google console documentation

add google client id and secret id into \`.env.local\`
\`\`\`
AUTH_GOOGLE_ID=your_google_id
AUTH_GOOGLE_SECRET=your_secret
\`\`\`

Usage for google signIn in client side
\`\`\`tsx
import { signIn } from 'next-auth/react'

<Button onClick={() => signIn('google')}>Log in With Google</Button>
\`\`\`

Finally, access stored data in session using \`useSession()\`
\`\`\`tsx
import { useSession } from 'next-auth/react'

const { data: session } = useSession()
console.log(session.user) // user data
\`\`\`

## Additional Setup
if you're using google image and it wont show up, update \`next.config.js\` file to allow next js get image from certain domains
\`\`\`js
const nextConfig = {
    // other configs
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
};
\`\`\`
`