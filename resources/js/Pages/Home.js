import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import NavBar from '@/Components/Navbar';

export default function Home(props) {
    return (
        <>
            <Head title="Home" />
            <NavBar { ...props }/>
        </>
    );
}
