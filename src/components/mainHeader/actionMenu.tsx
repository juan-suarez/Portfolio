import { Button, ButtonGroup } from "@mui/material";

const options = [
    'About me',
    'Profesional Experience',
    'Competitive programming',
    'Personal projects'
];

export const ActionMenu = () =>{
    return <div className="action-menu">
        <ButtonGroup variant="text" >
            {
                options.map((option) => {
                    return <Button key={option} >{option}</Button>
                })
            }
        </ButtonGroup>
       
    </div>

} 