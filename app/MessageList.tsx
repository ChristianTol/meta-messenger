"use client";

import useSWR from "swr";
import fetcher from "../ultils/fetchMessages";
import MessageComponent from "./MessageComponent";

function MessageList() {
  const { data: messages, error, mutate } = useSWR("/api/messages", fetcher);

  return (
    <div>
      {messages?.map((message) => (
        <MessageComponent key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
