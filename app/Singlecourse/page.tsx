"use client"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from 'react';
import Link from 'next/link';

export default function page() {
    useEffect(() => {
        AOS.init({
        });
    }, [])
    return (
        <ChakraProvider>
            <Flex w='100%' justifyContent='center'>
                <Flex w="93%" flexDir="column">
                    <Flex borderRadius="0.3rem" w='100%' h={{base:"22rem" , lg:'15rem'}} bg="#90CAF4" alignItems='center' justifyContent='center' px='10' >
                        <Flex flexDir='column' w='40rem' justifyContent='center' alignItems='center' >
                            <Heading>A single Course For two Quaters</Heading>
                            <Heading size='h4' fontSize="1.3rem" mt='5' >Web 3.0 and (Blockchain)  Metaverse</Heading>
                            <Text mt='1'>As you know Earlier that for two quater there is a single course called metaverse and after completing two quaters you have to chose a single specialization course</Text>
                        </Flex>
                    </Flex>
                    <Flex w="100%" py='6rem' px="3rem" alignItems='center' flexDir={{base:"column" , lg:"row"}} justifyContent={{base:"center" , lg:"space-around"}}>
                        <Flex bg="#90CAF4" borderRadius="1rem" boxShadow="1px 1px 4px black" w={{base:'20rem' , md:"27rem"}} h={{base:"28rem" , md:"20rem"}} flexDir="column" p="1rem" >
                            <Heading mb="3" color="#485F6E" fontSize="1.7rem">Quater I</Heading>
                            <Heading fontSize="1.3rem">CS-101: Object-Oriented Programming using TypeScript</Heading>
                            <Heading size="h6" color="blueviolet" mt={3}><QuestionOutlineIcon /> &nbsp;Duration: 13 Weeks</Heading>
                            <Text mt={4} color="#485F6E">We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users. </Text>
                        </Flex>
                        <Flex mt="10rem" bg="#90CAF4" borderRadius="1rem" boxShadow="1px 1px 4px black" w={{base:'20rem' , md:"27rem"}} h={{base:"28rem" , md:"20rem"}} flexDir="column" p="1rem">
                            <Heading mb="3" color="#485F6E" fontSize="1.7rem">Quater II</Heading>
                            <Heading fontSize="1.2rem">W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13</Heading>
                            <Heading size="h6" color="blueviolet" mt={2}><QuestionOutlineIcon /> &nbsp;Duration: 13 Weeks</Heading>
                            <Text mt={2} color="#485F6E">The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, etc.</Text>
                        </Flex>
                    </Flex>
                    <Flex w="100%" flexDir="column" alignItems="center" >
                        <Heading color="#90CAF5" fontSize="3rem" >Quater III & IV</Heading>
                        <Text color="#485F6E">Specialization</Text>
                        <Flex data-aos="fade-down" w="100%" alignItems="center" flexDir={{base:"column" , md:"row"}} justifyContent={{base:"center" , md:"space-between"}} py='2.5rem' >
                            <Flex alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href="https://www.piaic.org/iot"> Internet Of Things (IOT) </Link></Heading>
                            </Flex>
                            <Flex my={{base:"1.2rem" , lg:"0"}} alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href="https://www.piaic.org/block-chain"> Blockchain (BCC)</Link></Heading>
                            </Flex>
                            <Flex alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href="https://www.piaic.org/artificial-inteligence">Artificial Intelligence (AI)</Link></Heading>
                            </Flex>
                        </Flex>
                        <Flex data-aos="fade-down" w="100%" flexDir={{base:"column" , md:"row"}} alignItems='center' justifyContent="space-between" py={{base:'0.5rem' , md:'2.5rem'}} >
                            <Flex alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href="">Ambiguety and exploring</Link></Heading>
                            </Flex>
                            <Flex my={{base:"1.2rem" , lg:"0"}} alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1.2rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href=""> Web 3.0 and Metaverse (WMD) </Link></Heading>
                            </Flex>
                            <Flex alignItems="center" justifyContent="center" bg="#B3B3B3" borderRadius="1rem" boxShadow="1px 1px 4px black" w="19rem" h="13rem" p="1rem">
                                <Heading fontSize="1.3rem"><Link target="_blank" href="https://www.piaic.org/cloud-native"> Cloud Native Computing</Link></Heading>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}