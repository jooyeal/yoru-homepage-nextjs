import axios from "axios";
import React from "react";

type Props = {};

function GitHub({}: Props) {
  return <div>GitHub</div>;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default GitHub;
