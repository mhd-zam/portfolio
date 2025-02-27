import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const NavbarAvatarGroup = ({ activeUsers }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Sample active users data
    // const activeUsers = [
    //     { id: 1, name: "Jane Cooper", status: "In a meeting", avatar: "/api/placeholder/40/40", online: true },
    //     { id: 2, name: "Robert Fox", status: "Available", avatar: "/api/placeholder/40/40", online: true },
    //     { id: 3, name: "Esther Howard", status: "Away", avatar: "/api/placeholder/40/40", online: false },
    //     { id: 4, name: "Jenny Wilson", status: "Working on project", avatar: "/api/placeholder/40/40", online: true },
    //     { id: 5, name: "Cameron Williamson", status: "Available", avatar: "/api/placeholder/40/40", online: true },
    //     { id: 6, name: "Leslie Alexander", status: "On a call", avatar: "/api/placeholder/40/40", online: true },
    // ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Get available users count
    const availableCount = activeUsers.filter(user => user.online).length;

    // Maximum avatars to show in the group
    const maxVisible = 4;

    return (
        <div className="relative w-full flex justify-end p-4 ">
            {/* Avatar Group Button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 py-2 px-3 rounded-full bg-gray-700 hover:bg-gray-800 transition-colors"
            >
                <div className="flex -space-x-2 overflow-hidden">
                    {activeUsers.slice(0, maxVisible).map((user, index) => (
                        <div key={user.email} className="relative inline-block  rounded-full">
                            <img
                                src={user.profileUrl}
                                alt={user.name}
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            {/* {user.online && (
                                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400  transform translate-x-1 -translate-y-1" />
                            )} */}
                        </div>
                    ))}

                    {activeUsers.length > maxVisible && (
                        <div className="relative z-0 inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-xs font-medium text-gray-600 ring-2 ring-white">
                            +{activeUsers.length - maxVisible}
                        </div>
                    )}
                </div>

                <span className="text-sm font-medium text-white">{availableCount} online</span>
                <ChevronDown size={16} className="text-gray-500" />
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-5 mt-1 w-64 bg-gray-700 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-800"
                    style={{ top: '100%' }}
                >
                    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-sm font-semibold text-white">Team Members</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{availableCount} online</span>
                    </div>

                    <div className="max-h-72 overflow-y-auto">
                        {activeUsers.map(user => (
                            <div key={user.email} className="px-4 py-2 hover:bg-gray-50 flex items-center">
                                <div className="relative mr-3 flex-shrink-0">
                                    <img
                                        src={user.profileUrl}
                                        alt={user.name}
                                        className="h-9 w-9 rounded-full object-cover"
                                    />
                                    <span
                                        className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${user.online ? 'bg-green-400' : 'bg-gray-300'
                                            }`}
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                                    {/* <p className="text-xs text-gray-500 truncate">{user.status}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 py-2 border-t border-gray-100">
                        <button className="w-full flex items-center justify-center space-x-2 text-sm text-indigo-600 hover:text-indigo-500 font-medium py-1">
                            <Plus size={16} />
                            <span>Invite Team Member</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavbarAvatarGroup;