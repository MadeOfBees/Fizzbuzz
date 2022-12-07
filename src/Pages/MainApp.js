import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function MainApp() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [output, setOutput] = React.useState();

    function generateCount() {
        var input = document.getElementById("UserInput").value.trim();
        if (!input > 0 || input % 1 !== 0){return}else{
        let outputArray = [];
        for (let i = 1; i <= input; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                outputArray.push("FizzBuzz");
            } else if (i % 3 === 0) {
                outputArray.push("Fizz");
            } else if (i % 5 === 0) {
                outputArray.push("Buzz");
            } else {
                outputArray.push(`${i}`)
            }
        }
        const wQuotes = outputArray.map(input => `"${input}"`);
        const finalArray = `[${wQuotes}]`;
        setOutput(finalArray);
        setOpen(true);
    }}
    return (
        <div>
            <h1>Fizzbuzz up to:</h1>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} className="NoDoubtPut">
                    <Item className="screenText">
                        <Input id='UserInput'></Input>
                        <Item><Button onClick={generateCount}>Generate some buzz</Button></Item>
                    </Item>
                </Stack>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                className='Modal'
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-description" className='NoCont'>
                            {output}
                        </Typography>
                    </Box>
                </Fade>
            </Modal >
        </div>
    );
}

export default MainApp;