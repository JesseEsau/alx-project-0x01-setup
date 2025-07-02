import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-8">
                <h1 className="text-3xl font-bold mb-4">All Users</h1>
            </main>
        </div>
    );
};

export default UsersPage;
