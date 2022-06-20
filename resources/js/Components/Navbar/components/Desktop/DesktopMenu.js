export default function DesktopMenu ({ navigation, classNames }) {
    return (
        <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                        'transition all px-3 py-2 rounded-none text-sm font-medium',
                        item.current
                            ? 'text-white border-b-2 border-b-white'
                            : 'text-white hover:border-b-2 hover:border-b-white'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    {item.name}
                </a>
            ))}
        </div>
    );
}
