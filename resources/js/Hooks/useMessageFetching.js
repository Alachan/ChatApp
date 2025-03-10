import { useState, useEffect } from "react";
import ChatService from "@/Services/ChatService";

export function useMessageFetching(chatRoomId, showHistorical = false) {
    const [messages, setMessages] = useState([]);
    const [hasMoreMessages, setHasMoreMessages] = useState(false);
    const [loadingMore, setLoadingMore] = useState(false);
    const [oldestMessageId, setOldestMessageId] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch initial messages (most recent)
    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await ChatService.getMessages(chatRoomId, {
                page_size: 50,
            });

            const data = response.data;
            setMessages(data.messages || []);
            setHasMoreMessages(data.has_more || false);
            setOldestMessageId(data.oldest_id);
        } catch (error) {
            console.error("Error fetching messages:", error);
        } finally {
            setLoading(false);
        }
    };

    // Load older messages (can be triggered by button or scroll)
    const loadMoreMessages = async () => {
        if (!hasMoreMessages || !oldestMessageId || loadingMore) return;

        setLoadingMore(true);
        try {
            const response = await ChatService.getMessages(chatRoomId, {
                before_id: oldestMessageId,
                page_size: 30,
            });

            const data = response.data;
            const newMessages = data.messages || [];

            // Add older messages to the top of the list, ensuring no duplicates
            setMessages((prevMessages) => {
                // Create a Set of existing message IDs for fast lookup
                const existingIds = new Set(prevMessages.map((msg) => msg.id));

                // Filter out any messages that already exist in our state
                const uniqueNewMessages = newMessages.filter(
                    (msg) => !existingIds.has(msg.id)
                );

                return [...uniqueNewMessages, ...prevMessages];
            });

            // Only update oldest ID if we actually got new messages
            if (newMessages.length > 0) {
                const newOldestId = newMessages[0]?.id;
                if (newOldestId && newOldestId !== oldestMessageId) {
                    setOldestMessageId(newOldestId);
                }
            }
            setHasMoreMessages(data.has_more || false);
        } catch (error) {
            console.error("Error loading more messages:", error);
        } finally {
            setLoadingMore(false);
        }
    };

    // Reset and fetch messages when room changes or historical setting changes
    useEffect(() => {
        if (chatRoomId) {
            setMessages([]);
            setHasMoreMessages(false);
            setOldestMessageId(null);
            fetchMessages();
        }
    }, [chatRoomId, showHistorical]);

    return {
        messages,
        setMessages,
        loading,
        loadingMore,
        hasMoreMessages,
        oldestMessageId,
        loadMoreMessages,
        fetchMessages,
    };
}
