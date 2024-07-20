import MainAside from './_components/main-aside';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid md:grid-cols-2 h-full overflow-hidden w-full">
            {children}
            <MainAside />
        </div>
    );
};

export default MainLayout;
