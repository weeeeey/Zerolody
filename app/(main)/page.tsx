import Image from 'next/image';

const MainPage = () => {
    return (
        <div className="h-full  p-10 flex flex-col justify-between">
            <nav className="flex justify-between items-center ">
                <div className="font-bold text-4xl">Zerolody</div>
                <div className="relative size-[3rem] ">
                    <Image fill src="/logo.svg" alt="logo" />
                </div>
            </nav>
            <section>Enjoy your sound</section>
            <footer>copywrite zerojin@naver.com</footer>
        </div>
    );
};

export default MainPage;
