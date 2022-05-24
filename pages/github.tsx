import axios from "axios";
import React from "react";

type Props = {};

function GitHub({}: Props) {
  return <div>GitHub</div>;
}

export async function getStaticProps() {
  try {
    const response = await axios.get(`http://localhost:3000/api/github/user`);
    const languageList = response.data.user.map((repo: any) => repo.language);
    const languages = languageList.reduce((language: string | null) => {});
    return {
      props: { languageList },
    };
  } catch (err) {}
}

export default GitHub;
