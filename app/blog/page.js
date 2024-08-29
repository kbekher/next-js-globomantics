import Image from "next/image";
import styles from "./blog.module.css";

// Note: Configure all images in next.config.js file
// Src: https://nextjs.org/docs/messages/next-image-unconfigured-host

export default function Page() {
  return (
    <>
      <div className={styles.bgWrap}>
        <Image
          src="https://ace-and-tate.s3.eu-central-1.amazonaws.com/design/header_bg.jpg"
          alt="Picture of the author"
          quality={100}
          sizes={"100vw"}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <h1 className={styles.bgHeader}>Welcome to Blog</h1>
    </>
  );
}
