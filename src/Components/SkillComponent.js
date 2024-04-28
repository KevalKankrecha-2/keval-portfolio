import React from 'react';
import { DiGit } from 'react-icons/di';
import { SiVisualstudiocode, SiReact, SiNestjs, SiMysql, SiMongodb, SiJira, SiClickup   } from 'react-icons/si';
import { TbBrandJavascript, TbBrandHtml5, TbBrandNodejs } from 'react-icons/tb';
import { IoLogoNpm } from 'react-icons/io';
import { FaJava } from 'react-icons/fa6';
import { BsFiletypeCss } from 'react-icons/bs';


const SkilComponent = ({id}) => {
    return (
        <div className="skill-container" id={id}>
            <div className="skill-header">My Skills</div>
            <div className="skill-box">
                <h2>Languages</h2>
                <div className="skillset">
                    <abbr title='Java'><FaJava className='techLogo' /></abbr>
                    <abbr title='HTML 5'><TbBrandHtml5 className='techLogo' /></abbr>
                    <abbr title='JavaScript'><TbBrandJavascript className='techLogo' /></abbr>
                    <abbr title='CSS'><BsFiletypeCss className='techLogo' /></abbr>
                </div>
            </div>
            <div className="skill-box">
                <h2>Libraries and Frameworks</h2>
                <div className="skillset">
                    <abbr title='NPM'><IoLogoNpm className='techLogo' /></abbr>
                    <abbr title='NodeJs'><TbBrandNodejs className='techLogo' /></abbr>
                    <abbr title='ReactJS'><SiReact className='techLogo' /></abbr>
                    <abbr title='NestJs'><SiNestjs className='techLogo' /></abbr>
                    <abbr title='MySQL'><SiMysql className='techLogo' /></abbr>
                    <abbr title='MySQL'><SiMongodb className='techLogo' /></abbr>
                </div>
            </div>
            <div className="skill-box">
                <h2>Tools & Systems</h2>
                <div className="skillset">
                    <abbr title='Git/Github'><DiGit className='techLogo' /></abbr>
                    <abbr title='Visual Studio Code'><SiVisualstudiocode className='techLogo' /></abbr>
                    <abbr title='Jira'><SiJira className='techLogo' /></abbr>
                    <abbr title='Clickup'><SiClickup className='techLogo' /></abbr>
                </div>
            </div>
        </div>
    );
}

export default SkilComponent;
