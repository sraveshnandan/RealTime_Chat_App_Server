import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(
  //   'e934bff5-ff92-43b4-8259-7388746f383a',
  //   props.user.username,
  //   props.user.secret
  // );
  return (
    // <>
    //   <MultiChatWindow {...chatProps} />
    //   <MultiChatSocket {...chatProps} />
    // </>
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  )
};

export default ChatsPage;