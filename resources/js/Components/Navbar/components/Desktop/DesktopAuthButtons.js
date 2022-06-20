import {Link} from "@inertiajs/inertia-react";

export default function DesktopAuthButtons () {
    return (
        <>
            <Link href={route('login')} className="transition all px-3 py-2 rounded-none text-md font-medium text-white border-b-2 border-b-transparent hover:border-b-white">
                Log in
            </Link>

            <Link href={route('register')} className="transition all px-3 py-2 ml-2 rounded-md text-md font-medium text-jobbit bg-white border-b-2 border-b-transparent hover:underline">
                Register
            </Link>
        </>
    );
}
