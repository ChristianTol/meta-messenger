import { Message } from "../typings";

type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  return <div>MessageComponent</div>;
}

export default MessageComponent;
