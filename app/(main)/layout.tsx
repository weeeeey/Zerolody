import MainAside from './_components/main-aside';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid md:grid-cols-2  overflow-x-hidden w-full h-full">
            {children}
            <MainAside />
        </div>
    );
};

export default MainLayout;
