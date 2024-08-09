import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

export const SocialMedia = () => {
    return (
        <Grid container justifyContent="end" spacing={2}>
            <Grid item>
                <IconButton href="https://www.linkedin.com/in/juan-manuel-suarez-aguirre/" target="_blank" aria-label="LinkedIn">
                    <LinkedIn />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href="https://github.com/juan-suarez" target="_blank" aria-label="GitHub">
                    <GitHub />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href="https://www.instagram.com/juancho_suarez16/" target="_blank" aria-label="Instagram">
                    <Instagram className="" />
                </IconButton>
            </Grid>
        </Grid>
    );
}
