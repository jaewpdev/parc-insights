import Button from "@/src/components/Button";
import MessageSentVector from "../../public/message-sent-vector.svg";

export default function MesasgeSent() {
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="flex flex-col items-center -mt-[10%]">
        <MessageSentVector className="max-w-[400px] w-3/4 mb-4" />
        <p className="text-5xl mb-4">Woohoo! Success!</p>
        <p className="text-xl font-light mb-12 text-gray-500 text-center max-w-[50ch]">
          Thanks for connecting with us! Sit tight, we&apos;ll be in touch
          shortly to chat about how we can elevate your marketing game. Cheers!
        </p>
        <Button href="/">Home</Button>
      </div>
    </div>
  );
}
