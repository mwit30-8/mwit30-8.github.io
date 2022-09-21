import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Hi there 👋</h1>
      <p>
        We are MWIT30/8, our existence are based on 24 classmates in{" "}
        <a href="https://www.mwit.ac.th/" target="_blank">
          Mahidol Wittayanusorn School
        </a>
        . Let's say that we are specialized in natural science and have members
        that are open to collaborating on projects as long as it's not during
        the exam. Feel free to sneak at us and connect with us here:
      </p>
      <a href="https://github.com/mwit30-8" target="_blank">
        <img
          alt="Github Badge"
          src="https://img.shields.io/badge/-@mwit30--8-lightgrey?style=flat&logo=github&logoColor=white&link=https://github.com/mwit30-8"
        />
      </a>
      &nbsp;
      <a href="https://www.instagram.com/mwit30.8" target="_blank">
        <img
          alt="Instagram Badge"
          src="https://img.shields.io/badge/-@mwit30.8-purple?style=flat&logo=instagram&logoColor=white&link=https://instagram.com/mwit30.8"
        />
      </a>
      &nbsp;
      <a
        href="https://www.youtube.com/channel/UC2V09OIebePuFHNzPry1IyQ"
        target="_blank"
      >
        <img
          alt="Youtube Badge"
          src="https://img.shields.io/badge/-Wanorn_Family-darkred?style=flat&logo=youtube&logoColor=white&link=https://www.youtube.com/c/UC2V09OIebePuFHNzPry1IyQ"
        />
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Hi, wonder how you get here.",
};
