import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Handle nested fields
        if (name.startsWith("address.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    [field]: value
                }
            }));
        } else if (name.startsWith("geo.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                address: {
                    ...prev.address,
                    geo: {
                        ...prev.address.geo,
                        [field]: value
                    }
                }
            }));
        } else if (name.startsWith("company.")) {
            const field = name.split(".")[1];
            setUser(prev => ({
                ...prev,
                company: {
                    ...prev.company,
                    [field]: value
                }
            }));
        } else {
            setUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const userWithId = { ...user, id: Math.floor(Math.random() * 10000) }; // or use props/posts.length + 1
        onSubmit(userWithId);
        onClose();
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
                <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" placeholder="Full Name" value={user.name} onChange={handleChange} className="input" />
                    <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="input" />
                    <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="input" />
                    <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="input" />
                    <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="input" />

                    <h4 className="font-semibold">Address</h4>
                    <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="input" />
                    <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="input" />
                    <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="input" />
                    <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="input" />
                    <input name="geo.lat" placeholder="Latitude" value={user.address.geo.lat} onChange={handleChange} className="input" />
                    <input name="geo.lng" placeholder="Longitude" value={user.address.geo.lng} onChange={handleChange} className="input" />

                    <h4 className="font-semibold">Company</h4>
                    <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="input" />
                    <input name="company.catchPhrase" placeholder="Catch Phrase" value={user.company.catchPhrase} onChange={handleChange} className="input" />
                    <input name="company.bs" placeholder="Business Slogan" value={user.company.bs} onChange={handleChange} className="input" />

                    <div className="flex justify-between mt-6">
                        <button type="button" onClick={onClose} className="text-gray-600 hover:text-black">Cancel</button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
