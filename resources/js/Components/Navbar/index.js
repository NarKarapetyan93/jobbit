import { Disclosure } from '@headlessui/react'
import DesktopProfileDropdown from "@/Components/Navbar/components/Desktop/DesktopProfileDropdown";
import DesktopAuthButtons from "@/Components/Navbar/components/Desktop/DesktopAuthButtons";
import MobileMenuButton from "@/Components/Navbar/components/MobileMenuButton";
import MobileMenu from "@/Components/Navbar/components/Mobile/MobileMenu";
import DesktopMenu from "@/Components/Navbar/components/Desktop/DesktopMenu";
import DesktopNotifications from "@/Components/Navbar/components/Desktop/DesktopNotifications";
import ApplicationLogo from "@/Components/Navbar/components/ApplicationLogo";

const user = {
    name: 'Narek Karapetyan',
    email: 'nar.ar.karapetyan.com',
    authenticated: false,
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-jobbit">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex items-center justify-between h-16">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <ApplicationLogo className="w-32 h-auto" />
                                        </div>
                                        <div className="hidden md:block">
                                            <DesktopMenu navigation={navigation} classNames={classNames} />
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            {
                                                user.authenticated ? (
                                                    <>
                                                        <DesktopNotifications />
                                                        <DesktopProfileDropdown user={user} userNavigation={userNavigation} classNames={classNames}/>
                                                    </>
                                                ) : (
                                                    <DesktopAuthButtons />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        {/* Mobile menu button */}
                                        <MobileMenuButton open={open}/>
                                    </div>
                                </div>
                            </div>

                            <MobileMenu user={user} navigation={navigation} userNavigation={userNavigation} classNames={classNames} />
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    )
}
