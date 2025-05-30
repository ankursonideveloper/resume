import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Title from './Title';
import Header1 from './Header1';
import Header2 from './Header2';
import Divider from './Divider';
import Data from './Data';
import { Information } from '../Information/Information';
import Header from './Header';
import Section from './Section';
import Skills from './Skills';

const Resume = () => {
  return (
    <div className='Resume'>
      <Header>
        <Title titleName = "Ankur Soni"/>
        <Header1/>
        <Header2/>
      </Header>
      <Section name="Skills">{<Skills/>}</Section>
    </div>
  )
}

export default Resume
