"use client";

import React, { useState } from "react";
import SectionLink from "../SectionLink/SectionLink";
import Arrow from "../../../../assets/arrow.svg";
import Image from "next/image";
import styles from "./Header.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";

interface HeaderProps {
  data: any;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const locale = useLocale();
  const { Navigation } = data;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = ["en", "fi", "vi"];
  const currentLanguage = locale;
  const otherLanguages = languages.filter((lang) => lang !== currentLanguage);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="container mx-auto px-4 grid grid-cols-3 lg:grid-cols-4 gap-4 py-5">
      <div className="lg:col-span-2">
        <h1>EPD</h1>
      </div>
      <div className="flex items-center">
        {Navigation && (
          <nav>
            {Navigation.map((item, index) => (
              <SectionLink
                className="mr-2 lg:mr-5"
                key={index}
                url={item.Url ? `/${item.Url}` : "/"}
                title={item.Title}
              />
            ))}
          </nav>
        )}
      </div>
      <div className="flex items-center justify-end relative">
        <div
          onClick={toggleDropdown}
          className="cursor-pointer flex items-center"
        >
          <span className={styles.currentLanguage}>{locale}</span>
          <Image
            priority
            src={Arrow}
            alt="Dropdown Arrow"
            className={isDropdownOpen ? styles.flipArrow : ""}
          />
        </div>
        {isDropdownOpen && (
          <div className={`${styles.dropdown} absolute right-0 bg-white`}>
            {otherLanguages.map((lang) => (
              <div key={lang} className={`${styles.dropdownItem}`}>
                <Link href={`/${lang}`}>{lang.toUpperCase()}</Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
