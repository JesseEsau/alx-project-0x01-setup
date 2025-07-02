import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    name,
    username,
    email,
    phone,
    website,
    address,
    company,
}) => {
    return (
        <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-bold text-blue-700">{name} ({username})</h2>
            <p className="text-sm text-gray-600 mb-2">📧 {email}</p>
            <p className="text-sm text-gray-600 mb-2">📞 {phone}</p>
            <p className="text-sm text-gray-600 mb-2">🌐 <a href={`https://${website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{website}</a></p>

            <div className="mt-2 text-sm text-gray-700">
                <p><strong>Address:</strong> {address.suite}, {address.street}, {address.city}, {address.zipcode}</p>
                <p><strong>Company:</strong> {company.name}</p>
                <p><em>“{company.catchPhrase}”</em></p>
            </div>
        </div>
    );
};

export default UserCard;
