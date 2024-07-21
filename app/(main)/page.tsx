import Image from 'next/image';
import Link from 'next/link';

const MainPage = () => {
    return (
        <div className="h-full  p-10 pb-5 flex flex-col justify-between min-h-[60vh] dashboard">
            <nav className="flex justify-between items-center ">
                <Link href="/" className="font-bold text-4xl">
                    Zerolody
                </Link>
                <div className="relative size-[3rem] ">
                    <Image fill src="/logo.svg" alt="logo" />
                </div>
            </nav>
            <section className="text-4xl font-extrabold">
                <div>This is your own place. </div>
                <div>Try playing the piano</div>
            </section>
            <footer className="text-[0.75rem] ">
                Copyright 2024. 위영진. All rights reserved.
            </footer>
        </div>
    );
};

export default MainPage;
