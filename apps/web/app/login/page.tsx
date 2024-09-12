import { Button } from "@repo/ui/button";
import Link from "next/link";
import { SERVER_HOST } from "../../apis";

const socials = ["google", "line", "kakao"];

export default function Login() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>

      <div className="mt-20 flex flex-col">
        {socials.map((social) => (
          <Link key={social} href={`${SERVER_HOST}/auth/${social}`}>
            <Button
              className="mt-3 flex w-36 flex-row items-center space-x-2"
              imageURL={`/images/social/${social}-icon.png`}
              content={`${social} 로그인`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
