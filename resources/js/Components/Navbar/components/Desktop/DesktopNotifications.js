import {BellIcon} from "@heroicons/react/outline";

export default function DesktopNotifications () {
    return (
        <button type="button" className="p-1 rounded-full text-indigo-600 hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
    );
}
