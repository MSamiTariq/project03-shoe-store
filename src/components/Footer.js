import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { IconButton } from '@material-ui/core';
  

export const Footer = () => {
    return (
        <div style={{backgroundColor: '#c8cfbe', height: '130px'}}>
            <div style={{display: 'flex', paddingTop: '10px', height: '60px', justifyContent: 'center', alignItems: 'center'}}>
                    <a href= "https://github.com/samitariq12" target= "_blank">
                    <GitHubIcon style={{ fontSize: 50, paddingLeft: '12px', color: 'white' }} />
                    </a>
                    <a href= "https://www.facebook.com/sami.tariq.754" target= "_blank">
                    <FacebookIcon style={{ fontSize: 50 ,paddingLeft: '12px', color: 'white'}}/>
                    </a>
                    <a href= "https://www.linkedin.com/in/sami-tariq-709b101b1/" target= "_blank">
                    <LinkedInIcon style={{ fontSize: 50, paddingLeft: '12px', color: 'white' }} />
                    </a>
                    <a href= "https://www.instagram.com/samitariq12/?hl=en" target= "_blank">
                    <InstagramIcon style={{ fontSize: 50, paddingLeft: '12px', color: 'white' }} />
                    </a>
                    <a href= "https://twitter.com/samitariq12" target= "_blank">
                    <TwitterIcon style={{ fontSize: 50, paddingLeft: '12px', color: 'white' }} />
                    </a>

            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4 style= {{color: 'white'}}>
                DEVELOPED BY MUHAMMAD SAMI TARIQ
                </h4>
            </div>

        </div>
    )
}
