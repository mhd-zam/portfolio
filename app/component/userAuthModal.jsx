import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import UserProfileForm from "./UserProfileForm";

const UserAuthModal = ({ setUserAuthDetails }) => {
    const [isOpen, setIsOpen] = useState(localStorage.getItem('isAuth') ? false : true);

    function handleChange(values) {
        setUserAuthDetails(values)
        setIsOpen(false)
    }

    return (
        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} handleChange={handleChange} />
    );
};

const SpringModal = ({ isOpen, setIsOpen, handleChange }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                        <UserProfileForm handleChange={handleChange} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default UserAuthModal;