"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tile } from "@/components/base";
import styles from "./index.module.scss";

const NotFoundPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className={styles["not-found-page"]}>
      <Tile>
        <h1 className="text-3xl font-bold">Under Maintenance</h1>
        <div className="text-lg">
          We are currently working on the website. Please check back later.
        </div>

        {/* <h1>404 - Page Not Found</h1>
        <div>The page you are looking for does not exist.</div> */}
        <div>
          You will be redirected to the homepage in{" "}
          <span style={{ color: "red" }}>{countdown}</span> seconds.
        </div>
      </Tile>
    </div>
  );
};

export default NotFoundPage;
