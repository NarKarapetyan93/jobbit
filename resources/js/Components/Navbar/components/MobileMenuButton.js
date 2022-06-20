import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Disclosure} from "@headlessui/react";

export default function MobileMenuButton ({ open }) {
    return (
        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-indigo-600 hover:text-indigo-900 focus:outline-none">
            <span className="sr-only">Open main menu</span>
            {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
        </Disclosure.Button>
    );
}
