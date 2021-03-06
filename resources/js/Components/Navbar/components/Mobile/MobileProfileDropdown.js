export default function MobileProfileDropdown ({ user }) {
    return (
        <>
            <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
            </div>
            <div className="ml-3">
                <div className="text-base font-medium leading-none text-indigo-600">{user.name}</div>
                <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
            </div>
        </>
    );
}
