// src/components/CodeReviewPage.js
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDistanceToNow } from 'date-fns';

import './codeReviewPage.css';
import axios from 'axios';

const CodeReviewPage = () => {

    const [apiData, setApiData] = useState()
    const [commitInfo, setCommitInfo] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Get the dynamic part from the frontend URL
          const dynamicPart = window.location.pathname;
    
          // Construct the API endpoint using the dynamic part
          const apiEndpoint = `http://localhost:3000${dynamicPart}`;
    
          // Make the API request
          const response = await axios.get(apiEndpoint, {
            headers: { 'Content-Type': 'application/json' },
          });
    
          setApiData(response.data.files);
          
          const commitTime = new Date(response.data.commit_time);
          const timeAgo = formatDistanceToNow(commitTime, { addSuffix: true });
          
          setCommitInfo({
            owner: response.data.owner,
            author: response.data.author,
            message: response.data.message,
            time: timeAgo,
            parentCommit: response.data.parent_commit_sha,
            commit_sha: response.data.commit_sha,
            parentCommitDate: response.data.date,
          });
  
          console.log(response.data);
        } catch (error) {
          console.log('error', error);
        }
      };
    
      fetchData();
    }, []);
    
  return (
    <div className='mainDiv'>
    <div className='header'>
    <div className='header-left'>
    <div>
    <Avatar alt="Remy Sharp" className='avtar' src={require('../Assets/image.png')} />
    </div>
    <div>
     <p className='commit-name'>{commitInfo.message}</p>
     <p className='header-text'><span className='commit'>Authored  by</span> <span className='commit-id'>{commitInfo.author}</span> <span className='commit'>{commitInfo.time}</span> </p>
     <p className='header-text'>{ commitInfo.parentCommitDate }</p>
     </div>
     </div>
     <div className='header-right'>
     <p className='header-text'><span className='commit'> Commited By </span>&nbsp;<span className='commit-id'>{commitInfo.owner} </span>&nbsp; <span className='commit'> {commitInfo.time} </span></p>
     <p className='header-text'><span className='commit'> Commit</span> &nbsp; <span className='commit-id'> {commitInfo.commit_sha} </span></p>
     <p className='header-text'><span className='commit'>Parent</span>&nbsp;<span className='parent-id'>  {commitInfo.parentCommit
    } </span></p>
     </div>
     </div>
     <div>
     {apiData?.map((item, index)=>{
        return (
            <Accordion className='accordian'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="custom-accordion-summary"
        >
          <Typography className="typography-text">{item?.[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography className='collapse-content'>
          {
            item?.[1]?.map((ele, index)=>{
                return(
                  <span>
                    {console.log('#################', ele)}
                    <span className={`code-content ${ele[1] === '-' ? 'remove_code' : ''} ${ele[1] === '+' ? 'add_code' : ''}`}>{ele[0]}</span>
                  </span>
                )
            })
          }
          </Typography>
        </AccordionDetails>
      </Accordion>  
        )
     })}
    </div>
    </div>
  );
};

export default CodeReviewPage;