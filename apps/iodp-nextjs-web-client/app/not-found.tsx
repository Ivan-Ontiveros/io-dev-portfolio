"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./not-found.module.scss";

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
      <article>
        <h1>404 - Page Not Found</h1>
        <div>The page you are looking for does not exist.</div>
        <div>
          You will be redirected to the homepage in {countdown} seconds.
        </div>
      </article>
    </div>
  );
};

export default NotFoundPage;
