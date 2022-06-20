import {Link} from "@inertiajs/inertia-react";

export default function MobileAuthButtons () {
    return (
        <>
            <Link className="transition all block w-full text-center px-3 py-2 rounded-md text-md font-medium text-indigo-600 border-2 border-indigo-600 hover:text-indigo-900 hover:border-b-indigo-900" href={route('login')}>
                Log in
            </Link>

            <Link className="transition all block w-full text-center px-3 py-2 rounded-md text-md font-medium text-white bg-indigo-600 border-2 border-transparent hover:bg-indigo-900" href={route('register')}>
                Register
            </Link>
        </>
    );
}
