"use client"
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from "next/image"
import { useEffect } from 'react';
import { ChakraProvider, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import Facebook from '../icon/facebook';
import Twitter from '../icon/twitter';

export default function page() {
  useEffect(() => {
    AOS.init({
    });
  }, [])
  return (
    <ChakraProvider>
      <Flex flexDir='column' px={{base:'30' , lg:"40"}} justifyContent='center' alignItems='center'>
        <Image width='400' height='130' alt='Panaverse' src="/pana.png" />
        <Heading fontWeight={400} mt='6'>Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</Heading>
        <Text mt={2}>A software and tech Company</Text>
        <Flex mt='5' justifyContent="space-between" w="4rem">
          <a target="_blank" href='https://web.facebook.com/Dr.ArifAlvi/?_rdc=1&_rdr'><Facebook /></a>
          <a target="_blank" href='https://twitter.com/ArifAlvi'><Twitter /></a>
        </Flex>
        <Text data-aos="fade-right" mt={'3rem'}>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
          <br />
          <br />
          The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
          <br />
          <br />
          Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
          <br />
          <br />
          <b>The Program in a Nutshell: Earn While You Learn</b>
          <a id="nut"></a>
          <br />
          <br />
          In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.
          <br/>
          <br/>
          <b>Program of Studies</b>
          <br/>
          <br/>
          This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by all specialities and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a year-long hybrid programme that includes both onsite and online classes and is divided into four quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
          <br/>
          <br/>
          <b>Core Courses (Common in All Specializations)</b>
          <br/>
          <br/>
          Every participant of the program will start by completing the following two core courses:
          <br/>
          <br/>
          <a target="_blank" style={{color:'blueviolet'}} href='https://github.com/panaverse/panaverse.github.io#quarter-i-core'>Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript</a>
          <br />
          <a target="_blank" style={{color:'blueviolet'}} href='https://github.com/panaverse/panaverse.github.io#quarter-ii-core'>Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</a>
          <br/>
          <br/>
          <b>Specialized Tracks</b>
          <br/>
          <br/>
          After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
          <br/>
          <br/>
          <b>Web 3.0 (Blockchain) and Metaverse Specialization</b>
          <br/>
          <br/>
          This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
          <br/>
          <a style={{color:'blueviolet'}} target="_blank" href="https://www.panaverse.co/">Quarter III W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</a>
          <br/>
          <a style={{color:'blueviolet'}} target="_blank" href="https://www.panaverse.co/">Quarter IV MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences</a>
          <br/>
          <br/>
          <b>Artificial Intelligence (AI) and Deep Learning Specialization</b>
          <br/>
          <br/>
          The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
          <br/>
          <br/>
          <b>Cloud-Native Computing Specialization</b>
          <br/>
          <br/>
          The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
          <br/>
          <br/>
          <b>The Outcome for Participants of the Program</b>
          <br/>
          <br/>
          The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
          <br/>
          <br/>
          <a style={{color:'blueviolet'}} href='https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'>Top 5 ‘Metaverse’ jobs that will rule the future of tech industry</a>
          <br/>
          <a style={{color:'blueviolet'}} href='https://web3.career/web3-salaries/blockchain-developer'>Blockchain Developer Salary - Jun 2022</a>
          <br/>
          <a style={{color:'blueviolet'}} href='https://thedefiant.io/web3-soaring-salaries/'>Web3 Salaries Soar to $750,000 for Rank-and-File Devs</a>
          <br/>
          <a style={{color:'blueviolet'}} href='https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'>The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters</a>
          <br/>
          <a style={{color:'blueviolet'}} href='https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'>How To Become Metaverse Developer: Scope, Skills, and Salary</a>
          <br/>
          <br/>
          
        </Text>
      </Flex>
    </ChakraProvider>
  )
}