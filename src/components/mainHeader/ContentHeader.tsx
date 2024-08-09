import { Avatar, Button, ButtonGroup, Hidden } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CollapseMenu } from './collapseMenu';
import { SocialMedia } from './SocialMedia';
import { TalkWithMe } from './talkWithMe';
import { DownloadCV } from './downloadCV';



export const ContentHeader = () => {
    
    return (
        <Grid container spacing={0}>
            <Grid className="collapse-menu" xs={14}>
                <CollapseMenu />
                <SocialMedia />
            </Grid>
            <Grid className="header-image" xs={12} md={5}>
                <Avatar
                    className="avatar"
                    alt="Y"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: "43vmin", height: "40vmin" }}
                />
            </Grid>
            <Grid className="header-info"  xs={12} md={7}>
                <div className='banner-text'>
                    <h1>¡Mucho Gusto!</h1>
                    <h3>Soy Juan Manuel Suarez Aguirre</h3>
                    <p >
                        Ingeniero en sistemas apasionado por la programacion <br />
                        Backend | FullStack <br /> <br />
                        Para conocer mas puedes echarle un vistazo a mi portafolio. Tambien te dejo mi hoja de vida y un enlace de contacto en los siguientes botones:
                    </p>
                </div>

                <div className='contact-buttons'>
                    <ButtonGroup className='banner-buttons' >
                        <DownloadCV />
                        <TalkWithMe />
                    </ButtonGroup>
                </div>
            </Grid>
            <Hidden smDown>
                <Grid xs ={12} className="scroll-down-section">
                    <p className='scroll-down-text'>conoce mi portafolio...</p>
                    <div className="arrow-down"></div>
                </Grid>
            </Hidden>
        </Grid>
    )
}