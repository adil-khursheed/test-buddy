"use client";
import { PlaceholdersAndVanishInput as ChatInput } from "@/components/ui/ChatInput";
import { useState } from "react";

export function TestbotWindow(props: any) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    return e;
  };
  const handleChange = (e: any) => {
    // console.log(e.target.value);
  };
  return (
    <div className="w-full h-full flex flex-col justify-center gap-10 items-center">
      <div className="w-[100%] h-[80%] flex justify-center items-center">
        {!message && (
          <div className="flex flex-col justify-center items-center gap-10">
            <button className="h-16 w-46 font-bold text-3xl shrink-0 flex justify-center items-center rounded-tl-2xl rounded-tr-sm rounded-br-2xl rounded-bl-sm text-white bg-black dark:bg-white">
              Test Buddy
            </button>
            <h1 className="text-6xl font-extrabold text-center">
              How can I help you today?
            </h1>
          </div>
        )}
      </div>
      <div className="w-[80%]">
        <ChatInput
          placeholders={[
            "Type Your Query Here?",
            "Test Login Form?",
            "Navigate to Dashboard?",
            "Test the Application?",
          ]}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
