import React from "react";
import Particles from "react-tsparticles";
import { particleConfig } from "./config/particle-config";

export const ParticlesBg = () => {
  return <Particles params={particleConfig}></Particles>;
};
