"use client"
import { Button } from './button.js'

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: ()=> void,
    onSignout: ()=> void
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {


    return <div className="flex justify-between border px-6 py-4 border-slate-300">
        <div className="text-2xl flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center">
            <Button onclick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}

export default Appbar