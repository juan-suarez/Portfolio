import Particles, { initParticlesEngine } from "@tsparticles/react";
import { options } from "../../utilities/particleOptions";
import { useEffect } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";
import "./mainHeader.css"

export const ParticlesBG = ({ className }:any) => {
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            console.log("testing");
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    return (
        <div className={className}>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        </div>
    );
};
