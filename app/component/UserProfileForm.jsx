import React, { useState } from 'react';

const UserProfileForm = ({ handleChange }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-md mx-auto ">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent text-white">Profile Setup</h2>
                <p className="text-gray-200 mt-2">Let's create your stunning profile</p>
            </div>

            <div className="space-y-4">
                {/* Image Upload Section */}
                <div className="flex flex-col items-center">
                    <div
                        className={`relative w-40 h-40 rounded-full ${isDragging ? 'ring-4 ring-indigo-400 bg-indigo-50' : 'ring-2 ring-gray-200'
                            } flex items-center justify-center overflow-hidden mb-4 transition-all duration-300 shadow-md group hover:ring-indigo-300`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        {imagePreview ? (
                            <>
                                <img
                                    src={imagePreview}
                                    alt="Profile Preview"
                                    className="w-full h-full object-cover rounded-full transition-transdiv duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full">
                                    <p className="text-white text-sm font-medium">Change photo</p>
                                </div>
                            </>
                        ) : (
                            <div className="text-center p-4 bg-white bg-opacity-80 rounded-full w-full h-full flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <p className="text-sm text-indigo-500 mt-2 font-medium">Add Profile Photo</p>
                                <p className="text-xs text-gray-400 mt-1">Drag or click to upload</p>
                            </div>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            className="opacity-0 absolute inset-0 cursor-pointer"
                            onChange={handleImageChange}
                            id="profile-image"
                        />
                    </div>
                </div>

                {/* Name Input */}
                <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1 ml-2">
                        Your Full Name
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-4 pl-12 bg-white bg-opacity-80 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 shadow-md text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                            placeholder="John Doe"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {/* email Input */}
                <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1 ml-2">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-4 pl-12 bg-white bg-opacity-80 border-0 rounded-xl focus:ring-2 focus:ring-indigo-500 shadow-md text-gray-700 placeholder-gray-400 outline-none transition-all duration-200"
                            placeholder="email"
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#080341" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    onClick={() => {
                        handleChange({
                            name: name,
                            profileUrl: imagePreview,
                            email: email
                        })
                    }}

                    className="w-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-4 px-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-indigo-200 hover:shadow-md transdiv hover:-translate-y-1"
                >
                    Create Your Profile
                </button>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
                Your profile information will be securely stored
            </div>
        </div>
    );
};

export default UserProfileForm;