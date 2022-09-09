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
          C++ is a popular programming language.<br/>

          C++ is used to create computer programs, and is one of the most used language in game development.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>C++ Variables</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Variables are containers for storing data values. <br/>

In C++, there are different types of variables (defined with different keywords), for example:<br/> <br/>

int - stores integers (whole numbers), without decimals, such as 123 or -123 <br/> 
double - stores floating point numbers, with decimals, such as 19.99 or -19.99<br/> 
char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes<br/>
string - stores text, such as "Hello World". String values are surrounded by double quotes<br/>
bool - stores values with two states: true or false<br/>
          </Typography>
        </AccordionDetails>  
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>C++ Data Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          int myNum = 5;               // Integer (whole number) <br/>
float myFloatNum = 5.99;     // Floating point number<br/>
double myDoubleNum = 9.98;   // Floating point number<br/>
char myLetter = 'D';         // Character<br/>
bool myBoolean = true;       // Boolean<br/>
string myText = "Hello";     // String<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>C++ Input Output (I/O)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            OUTPUT : <br/> <br/>
          The cout object is used to output values/print text: <br/>
          Example: <br/>


          INPUT: <br/>
          cin is a predefined variable that reads data from the keyboard with the extraction operator <br/>

    
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>C++ Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Comments can be used to explain C++ code, and to make it more readable. It can also be used to prevent execution when testing alternative code. Comments can be singled-lined or multi-lined. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>C++ Operators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Operators are used to perform operations on variables and values. <br/>
          C++ divides the operators into the following groups: <br/><br/>

Arithmetic operators<br/>
Assignment operators<br/>
Comparison operators<br/>
Logical operators<br/>
Bitwise operators<br/>

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>C++ if...else Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          C++ has the following conditional statements: ,<br/> <br/>

Use if to specify a block of code to be executed, if a specified condition is true<br/>
Use else to specify a block of code to be executed, if the same condition is false<br/>
Use else if to specify a new condition to test, if the first condition is false<br/>
Use switch to specify many alternative blocks of code to be executed<br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>C++  while and do...while Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Loops can execute a block of code as long as a specified condition is reached. <br/>

Loops are handy because they save time, reduce errors, and they make code more readable. <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>C++ for Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Loops can execute a block of code as long as a specified condition is reached. <br/>

          Loops are handy because they save time, reduce errors, and they make code more readable. <br/>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane20'} onChange={handleChange('pane20')}>
        <AccordionSummary aria-controls="pane20d-content" id="pane20d-header">
          <Typography>C++ switch Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This is how it works: <br/> <br/>

The switch expression is evaluated once <br/>
The value of the expression is compared with the values of each case <br/>
If there is a match, the associated block of code is executed <br/>
The break and default keywords are optional, and will be described later in this chapter <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane21'} onChange={handleChange('pane21')}>
        <AccordionSummary aria-controls="pane21d-content" id="pane21d-header">
          <Typography>C++ Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A function is a block of code which only runs when it is called. <br/>

You can pass data, known as parameters, into a function. <br/>

Functions are used to perform certain actions, and they are important for reusing code: Define the code once, and use it many times. <br/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane22'} onChange={handleChange('pane22')}>
        <AccordionSummary aria-controls="pane22d-content" id="pane22d-header">
          <Typography>C++ Strings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Strings are used for storing text. <br/>

A string variable contains a collection of characters surrounded by double quotes:<br/>
          </Typography>
        </AccordionDetails> 
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'pane23'} onChange={handleChange('pane23')}>
        <AccordionSummary aria-controls="pane23d-content" id="pane23d-header">
          <Typography>C++ Array</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. <br/>

To declare an array, define the variable type, specify the name of the array followed by square brackets and specify the number of elements it should store: <br/>
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
         
        <br/>  <br/>
        <Footer/>
          
           
      </div>
    );
  }