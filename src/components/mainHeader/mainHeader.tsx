import { Rating } from "@mui/material"
import "./mainHeader.css"
import { ParticlesBG } from "./particles"
import { ContentHeader } from "./ContentHeader"

export const MainHeader =  () => {
    return (
        <div className="particle-container">
            <ParticlesBG className="particle-bg" />
            <div className="content">
                <ContentHeader/>
            </div>
        </div>
    )
}