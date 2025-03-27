"use client";
import { sendQuery } from "@/app/features/api/sendQuery";
import { Load } from "@/components/ui/Load";
import { Text } from "@/app/ui/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { signOut } from "next-auth/react";

export default function Home() {
  const [text, setText] = useState<string[]>([]);
  const [question, setQuestion] = useState("");

  return (
    <>
      <div className="flex flex-col h-svh w-full text-2xl">
        <div
          className={`flex items-center 
      justify-center h-full w-full`}
        >
          {text ? <Text content={text} /> : <Load />}
        </div>
        <form className={`flex flex-row text-3xl p-6 gap-12 border-t-4`}>
          <Input
            placeholder="Question"
            className="border-2"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button
            onClick={async (e) => {
              e.preventDefault();
              const newText = await sendQuery(question);

              return setText((prevText) => [...prevText, newText]);
            }}
          >
            Send
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              return signOut({ redirectTo: "/" });
            }}
          >
            SIgnOut
          </Button>
        </form>
      </div>
    </>
  );
}
