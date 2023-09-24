"use client"

import {useSession, signIn, signOut} from "next-auth/react";
import { UserCard } from "./UserCard";

export default function GoogleLogin()
{
    // get session from nextauth
    const {data : session} = useSession();

    // useSession use React Context

    // if the user exists -> show a Sign Out button and their information
    if (session)
    {
        return (
            <>
                <button onClick={() => signOut() } type="button" className="btn btn-primary">Sign Out of Google</button>
                {/* pass session info to server component */}
                <UserCard user={session?.user}/>
            </>
        );
    }
    else
    {
        return (
            <>
                <button onClick={() => signIn()} type="button" className="btn btn-secondary">Sign In with Google</button>
            </>
        );
    }
    // if the user doesn't exists -> show a Sign In button
}
