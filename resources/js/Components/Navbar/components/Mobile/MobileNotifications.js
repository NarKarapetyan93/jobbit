import {BellIcon} from "@heroicons/react/outline";

export default function MobileNotifications () {
    return (
        <button type="button" className="ml-auto bg-indigo-900 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
