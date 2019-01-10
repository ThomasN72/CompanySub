import React, { Component } from "react";
import SignUp from '../components/SignUp';
import LandingCard from '../components/LandingCard';
import IndexNav from '../components/IndexNav';
import HomePage from '../components/styles/HomePage';
import ContentDiv from '../components/styles/ContentDiv';

const Home = props => (
  <HomePage>
    <IndexNav />
    <ContentDiv>
      <LandingCard />
      <SignUp />
    </ContentDiv>
    <ContentDiv>
      <h1>Box</h1>
      <h1>Box</h1>
      <h1>Box</h1>
    </ContentDiv>
    <ContentDiv>
      <p>
        Pergo coctione, et ego, et tu oblivisci Pinkman. Obliviscendum hoc
        unquam factum. Intelligamus hoc in sola SINGULTO multo aliter atque
        fructuosa negotium structura. Malo B. Option.{" "}
      </p>
      <p>
        Pergo coctione, et ego, et tu oblivisci Pinkman. Obliviscendum hoc
        unquam factum. Intelligamus hoc in sola SINGULTO multo aliter atque
        fructuosa negotium structura. Malo B. Option.{" "}
      </p>
    </ContentDiv>
  </HomePage>
);

export default Home;
