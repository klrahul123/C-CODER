import React , {useEffect}from "react";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie'
import './cs.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap'; 
import Footer from "./Footer";





const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



export default function Content() {

  const history = useHistory();
  const cookie = new Cookies();

  const callAboutPage = async () => {
    try{
       
        const res= await fetch("http://localhost:8000/about", {
        method:"GET",
       
        headers:{
          // Accept:"Application/json",
          // "Content-type": "Application/json",
          
          "jwtoken":cookie.get('jwtoken')
        }
        
      });
       
      const data =await res.json();
      console.log(data);
      if (!res.status===200) {
        const error= new Error(res.error);
        throw error;
      }

    } catch (err){
      console.log(err);
      history.push('/login');

    }
  }

   useEffect(() => {
    callAboutPage();
    },  );

    const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



    return (
      
      <div className="ba"> 
          <br/> 
          <Container className='abb'>
         <Row className='acc'>  
        

        <Col sm={12} className="aee">
        <Accordion  class="num" expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>C++ Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>C++ Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>  
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>C++ Data Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>C++ Input Output (I/O)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>C++ Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>C++ Operators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>C++ if...else Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>C++  while and do...while Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>C++ for Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane20'} onChange={handleChange('pane20')}>
        <AccordionSummary aria-controls="pane20d-content" id="pane20d-header">
          <Typography>C++ switch Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane21'} onChange={handleChange('pane21')}>
        <AccordionSummary aria-controls="pane21d-content" id="pane21d-header">
          <Typography>C++ Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane22'} onChange={handleChange('pane22')}>
        <AccordionSummary aria-controls="pane22d-content" id="pane22d-header">
          <Typography>C++ Strings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails> 
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane23'} onChange={handleChange('pane23')}>
        <AccordionSummary aria-controls="pane23d-content" id="pane23d-header">
          <Typography>C++ Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          COMING SOON...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane24'} onChange={handleChange('pane24')}>
        <AccordionSummary aria-controls="pane24d-content" id="pane24d-header">
          <Typography>C++ OOPS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <br />
          <a href="https://www.w3schools.com/cpp/default.asp"> <Button variant="primary">Click Here</Button> </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
        

          
        </Col>
        </Row>
        </Container>
         
        <br/> <hr/> <br/>
        <Footer/>
          
           
      </div>
    );
  }