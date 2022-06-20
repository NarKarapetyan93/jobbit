import {Disclosure} from "@headlessui/react";
import {BellIcon} from "@heroicons/react/outline";
import MobileAuthButtons from "@/Components/Navbar/components/Mobile/MobileAuthButtons";
import MobileProfileDropdown from "@/Components/Navbar/components/Mobile/MobileProfileDropdown";
import MobileNotifications from "@/Components/Navbar/components/Mobile/MobileNotifications";

export default function MobileMenu ({ user, navigation, userNavigation, classNames }) {
    return (
        <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                    <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-indigo-900 text-white rounded-md' : 'text-indigo-600 hover:border-b-2 hover:border-b-indigo-900',
                            'block px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
                {
                    user.authenticated ? (
                        <>
                            <div className="flex items-center px-5">
                                <MobileProfileDropdown />

                                <MobileNotifications />
                            </div>

                            <div className="mt-3 px-2 space-y-1">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-wrap px-2 space-y-1">
                            <MobileAuthButtons />
                        </div>
                    )
                }
            </div>
        </Disclosure.Panel>
    );
}
