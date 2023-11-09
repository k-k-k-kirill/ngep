import React from "react";
import Link from "next/link";
import styles from "./ButtonLink.module.css";

interface ButtonProps {
  data: any;
}

const ButtonLink: React.FC<ButtonProps> = ({ data }) => {
  const { Title, Url } = data;

  return (
    <Link href={`/${Url}`}>
      <button className={styles.buttonLink}>{Title}</button>
    </Link>
  );
};

export default ButtonLink;
