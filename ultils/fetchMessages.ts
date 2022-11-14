import redis from "../redis";
import { Message } from "../typings";

const fetcher = async () => {
  const res = await fetch("/api/messages");
  const data = await res.json();
  const messages: Message[] = data.messages;

  return messages;
}

export default fetcher;