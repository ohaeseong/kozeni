import { Button } from "@repo/ui/button";
import Link from "next/link";
import { SERVER_HOST } from "../../apis";

const socials = ["google", "line", "kakao"];

export default function Login() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Login</h1>
      </div>

      <div className="flex flex-col mt-20">
        {socials.map((social) => (
          <Link key={social} href={`${SERVER_HOST}/auth/${social}`}>
            <Button
              className="flex flex-row items-center space-x-2 mt-3 w-36"
              imageURL={`/images/social/${social}-icon.png`}
              content={`${social} 로그인`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
