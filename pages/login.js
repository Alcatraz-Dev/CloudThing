import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function login() {
    const { data: session } = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session) {
            router.push("/")
        }

    }, [session]);
    return (
        <div className='flex justify-center items-center mt-[50%]'>
            <button className='bg-blue-400 p-2 rounded-xl px-3 text-white' onClick={() => signIn()} >
                Login with Google
            </button>
        </div>
    )
}

export default login