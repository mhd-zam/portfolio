// hooks/useKanbanSocket.js
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const useKanbanSocket = (initialCards = [], userPermission) => {
    const [cards, setCards] = useState(initialCards);
    const [activeUsers, setactiveUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [connected, setConnected] = useState(false);
    const [socket, setSocket] = useState(null);

    // Initialize socket connection
    useEffect(() => {
        if (!userPermission?.isAuthorized) return;

        const socketInstance = io(
            process.env.NEXT_PUBLIC_WEBSOCKET_URL || "http://192.168.1.61:3001"
        );
        setSocket(socketInstance);

        // Set up WebSocket event listeners
        socketInstance.on("connect", () => {
            console.log("Connected to WebSocket server");
            setConnected(true);
            socketInstance.emit("requestInitialState");
            socketInstance.emit("login", userPermission.user);
        });

        socketInstance.on("disconnect", () => {
            console.log("Disconnected from WebSocket server");
            setConnected(false);
        });

        // Listen for the initial board state
        socketInstance.on("initialState", (initialData) => {
            setCards(initialData);
            setLoading(false);
        });

        socketInstance.on("userlist", (userlist) => {
            console.log(userlist, 'userlist.......');

            setactiveUsers(userlist);
            // setLoading(false);
        });

        // Listen for board updates from other users
        socketInstance.on("boardUpdate", (updatedCards) => {
            setCards(updatedCards);
        });

        // Clean up event listeners on component unmount
        return () => {
            socketInstance.off("connect");
            socketInstance.off("disconnect");
            socketInstance.off("initialState");
            socketInstance.off("boardUpdate");
            socketInstance.off("offline", userPermission.user);
            socketInstance.disconnect();
        };
    }, [userPermission]);

    // Function to update the board and broadcast changes
    const updateCards = (newCards) => {
        setCards(newCards);
        // Emit the updated cards to the WebSocket server
        if (socket && connected) {
            socket.emit("updateBoard", newCards);
        }
    };

    return {
        cards,
        setCards: updateCards,
        loading,
        connected,
        socket,
        activeUsers,
    };
};

export default useKanbanSocket;
