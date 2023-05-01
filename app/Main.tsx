"use client"
// if error is styled-component is not found then "npm install styled-components"
// npm install --save aos@next
// import React,{useEffect} from "react";
// importing aos
import AOS from 'aos'
import 'aos/dist/aos.css';
import Slideshow from "@/component/slideshow"
import Texteffect from "@/component/Texteffect"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Button, Center, ChakraProvider, Divider, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import Downarrow from "./icon/Downarrow"
import { useEffect } from 'react';
import Speacialtrack from './speacialtrack';
import Programnutshell from './programnutshell';
// import PanaverseComunity from './PanaverseComunity';
import Footer from './footer';
import Operationalcity from './operationalcity';
import Recomandedvideobeforestarting from './Recomandedvideobeforestarting';
import Seo from '@/component/seo';

export default function Main(canonical:any) {
    useEffect(() => {
        AOS.init({
        });
    }, [])
    return (
        <ChakraProvider >
            <Seo canonical={canonical} />

            {/* mt={{ base: "25rem", md: '20rem', lg: "-3" }} */}
            <Flex alignItems='center' flexDir='column' w='100%' h={{ base: '56rem', lg: '35rem' }} >
                <Flex alignItems='center' mt="-1rem" flexDir={{ base: 'column-reverse', md: 'column-reverse', lg: 'row' }} justifyContent={{ base: 'center', lg: 'space-between' }} w={{ base: '98%', lg: '90%' }} h='87%' >
                    {/* data-aos-offset="490" */}
                    <Flex flexDir='column' w={{ base: '90%', lg: '45%' }} >
                        <Heading>Let's <span style={{ color: '#a71629' }}>Lead</span> the Next Genration to Right way with Us</Heading>
                        <Text mt={4} fontSize="22">We will Web 3.0 and Metaverse Develpor (WMD) with "Panaverse" a software company</Text>
                        <Link target="_blank" href="https://portal.piaic.org/signup">
                            <Flex cursor='pointer' alignItems='center' justifyContent='space-between' mt={8} bg='#ddc2c7' borderRadius='0% 3rem 3rem 0' w='17rem' h='3.1rem'>
                                <Flex color='white' bg='#c23852' overflow='hidden' borderRadius='0% 3rem 3rem 0' w='11rem' h='3.1rem' justifyContent='center' alignItems='center' fontSize='25' >Participate in</Flex>
                                <Text color='black' mr={25} fontSize='22' >Course</Text>
                            </Flex>
                        </Link>
                        <Flex mt={5} ><Button borderRadius=" 0 2rem 2rem 0 " bg='#973640' rightIcon={<ArrowForwardIcon />}><Link target="_blank" href='https://www.piaic.org/'> Visit PIAIC</Link></Button></Flex>
                        <Text margin='auto' fontSize='1.1rem' color='#c23852' mt='3'>The export of 10$ Trillion dollar</Text>
                    </Flex>
                    <Center color='red' display={{ base: 'none', md: 'none', lg: 'flex' }} border='1px' height='70%'  >
                        <Divider orientation='vertical' />
                    </Center>
                    <Flex flexDir='column' w={{ base: '100%', md: '85%', lg: '45%' }} >
                        <Flex mb={2} justifyContent="center" alignItems='center' w='100%' ><Heading color="#a71629" size="h1" fontSize="1.7rem">Panaverse dao</Heading></Flex>
                        <Flex h='15rem' ><Slideshow /></Flex>
                        <Flex color="#a71629" mt='10' p='2' alignItems='center' justifyContent='center' fontSize={{ base: '0.9rem', lg: '1.4rem' }}>Here is a Chance to &nbsp; <span style={{ color: '#a71629', fontSize: '1.2rem' }}><Heading size={{ base: 'h6', lg: 'h4' }}><Texteffect /></Heading></span></Flex>
                    </Flex>
                </Flex>

                <Flex justifyContent='center' display={{ base: 'none', lg: 'flex' }} w='90%' h='13%' mt="-8" >
                    <Flex cursor='pointer' justifyContent='center' alignItems='center' boxShadow='1px 1px 5px #622868' borderRadius='50%' w={14} h={14} bg='#e5cece' >
                        <a aria-label='THis will redirect to middle' href='/#middle'><Downarrow /></a>
                    </Flex>
                </Flex>
            </Flex>
            <Flex>
                <div id="middle" />
                <Speacialtrack />
            </Flex>
            {/* <PanaverseComunity /> */}
            <Programnutshell />
            <Operationalcity />
            <Recomandedvideobeforestarting />
            <Footer />

        </ChakraProvider>
    )
}
