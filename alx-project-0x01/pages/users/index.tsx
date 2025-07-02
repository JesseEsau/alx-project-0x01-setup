import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
    posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [newUser, setNewUser] = useState<UserData | null>(null);

    const handleAddUser = (user: UserData) => {
        setNewUser({ ...user, id: posts.length + 1 });
    };

    return (
        <div>
            <Header />
            <main className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">User Profiles</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition"
                    >
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map(user => (
                        <UserCard key={user.id} {...user} />
                    ))}
                </div>
            </main>
            {isModalOpen && (
                <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
            )}
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Users;
