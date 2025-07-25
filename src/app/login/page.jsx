import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* BOX */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[80%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 w-full md:h-full md:w-1/2">
          <Image
            src="/loginBG.jpeg"
            alt=""
            fill
            className="object-cover rounded-t-md md:rounded-l-md md:rounded-tr-none"
          />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>

          <Link href="https://www.google.com/">
            <button className="flex w-full gap-4 p-4 ring-1 ring-orange-100 rounded-md">
              <Image
                src="/google.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <span>Sign in with Google</span>
            </button>
          </Link>

          <Link href="https://www.facebook.com/">
            <button className="flex w-full gap-4 p-4 ring-1 ring-blue-100 rounded-md">
              <Image
                src="/facebook.png"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <span>Sign in with Facebook</span>
            </button>
          </Link>

          <p className="text-md mt-4">
            Have a problem?
            <Link className="underline ml-1" href="/contact">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
