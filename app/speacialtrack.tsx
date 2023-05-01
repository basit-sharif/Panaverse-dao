'use client'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Slideshow from "@/component/slideshow"
import { Box, Button, ChakraProvider, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Speacialtrack() {
    useEffect(() => {
        AOS.init({
        });
    }, [])

    return (
        <Flex w='100%' overflow="hidden" mt={{ base: '0', lg: '5rem' }} flexDir='column' alignItems='center' justifyContent='center' >
            <Heading>Become a <span style={{ color: '#a71629' }}>Developer</span> of</Heading>

            <Flex data-aos="fade-left" flexDir={{ base: 'column', lg: "row" }} w='90%' mt='4rem' justifyContent={{ base: 'center', lg: 'space-between' }} alignItems="center">
                <Flex flexDir={'column'} w='22rem' bg={"#e1ced200"} borderRadius="0.7rem 0.7rem 0 0 " h="25rem" >
                    <Flex w="100%" h="70%" borderRadius="0.5rem 0.5rem 2rem 2rem">
                        <Image width={400} height={0} style={{ borderRadius: "0.5rem 0.5rem 2rem 2rem" }} alt="Piaic" src="/slide1.jpg" />
                    </Flex>
                    <Heading size="h1" fontSize='1.4rem' cursor="pointer" mt={2} ml={2}>Web 3.0 and Metaverse Developers (WMD)</Heading>
                    <Box px={2} py={3}>
                        <Button bg={"#E2E8F0"} rightIcon={<ArrowForwardIcon />}> <Link aria-label='This will take to courses section' href="/Singlecourse">Learn more</Link> </Button>
                        <Button colorScheme="blue" ml={10}><a target="_blank" href='https://portal.piaic.org/signup'> Apply For</a></Button>
                    </Box>
                </Flex>
                <Flex mt={{base:'6' , lg:'0'}} flexDir='column' w='22rem' bg={"#e1ced200"} borderRadius="0.7rem 0.7rem 0 0 " h="23rem" >
                    <Flex w="100%" h="70%" borderRadius="0.5rem 0.5rem 2rem 2rem">
                        <Image width={400} height={0} style={{ borderRadius: "0.5rem 0.5rem 2rem 2rem" }} alt="Piaic" src="/blockchain.jpg" />
                    </Flex>
                    <Heading size="h1" fontSize='1.4rem' cursor="pointer" mt={2} ml={2}>Blockchain Computing (BCC)</Heading>
                    <Box px={2} py={3}>
                        <Button rightIcon={<ArrowForwardIcon />}> <Link aria-label='This will take to courses section' href="/Singlecourse">Learn more</Link> </Button>
                        <Button colorScheme='whatsapp' ml={10}><a target="_blank" href='https://portal.piaic.org/signup'> Apply For</a></Button>
                    </Box>
                </Flex>
                <Flex mt={{base:'6' , lg:'0'}} flexDir='column' w='22rem' bg={"#e1ced200"} borderRadius="0.7rem 0.7rem 0 0 " h="26rem" >
                    <Flex w="100%" h="70%" borderRadius="0.5rem 0.5rem 2rem 2rem">
                        <Image width={400} height={0} style={{ borderRadius: "0.5rem 0.5rem 2rem 2rem" }} alt="Piaic" src="/artificial.jpg" />
                    </Flex>
                    <Heading size="h1" fontSize='1.4rem' cursor="pointer" mt={2} ml={2}>Artificial Intelligence (AI) Developer </Heading>
                    <Box px={2} py={3}>
                        <Button rightIcon={<ArrowForwardIcon />}> <Link aria-label='This will take to courses section' href="/Singlecourse">Learn more</Link> </Button>
                        <Button colorScheme="teal" ml={10}><a target="_blank" href='https://portal.piaic.org/signup'> Apply For</a></Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex flexDir={{base:'column' , lg:'row'}} alignItems="center" w='90%' mt='4.5rem' data-aos="fade-right" >
                <Flex mt={{base:'6' , lg:'0'}} flexDir='column' w='22rem' bg={"#e1ced200"} borderRadius="0.7rem 0.7rem 0 0 " h="24rem" >
                    <Flex w="100%" h="70%" borderRadius="0.5rem 0.5rem 2rem 2rem">
                        <Image width={400} height={0} style={{ borderRadius: "0.5rem 0.5rem 2rem 2rem" }} alt="Piaic" src="/cloundNative.jpg" />
                    </Flex>
                    <Heading size="h1" fontSize='1.4rem' cursor="pointer" mt={2} ml={2}>Clound Native Computing (CNC) Developers</Heading>
                    <Box px={2} py={3}>
                        <Button rightIcon={<ArrowForwardIcon />}> <Link aria-label='This will take to courses section' href="/Singlecourse">Learn more</Link> </Button>
                        <Button colorScheme='blue' ml={10}><a target="_blank" href='https://portal.piaic.org/signup'> Apply For</a></Button>
                    </Box>
                </Flex>
                <Flex mt={{base:'6' , lg:'0'}} ml={{base:'0' , lg:"5rem"}} flexDir='column' w='22rem' bg={"#e1ced200"} borderRadius="0.7rem 0.7rem 0 0 " h="24rem" >
                    <Flex w="100%" h="70%" borderRadius="0.5rem 0.5rem 2rem 2rem">
                        <Image width={400} height={0} style={{ borderRadius: "0.5rem 0.5rem 2rem 2rem" }} alt="Piaic" src="/iot.jpg" />
                    </Flex>
                    <Heading size="h1" fontSize='1.4rem' cursor="pointer" mt={2} ml={2}>Internet of Things (IOT) Developers</Heading>
                    <Box px={2} py={3}>
                        <Button rightIcon={<ArrowForwardIcon />}> <Link aria-label='This will take to courses section' href="/Singlecourse">Learn more</Link> </Button>
                        <Button colorScheme='facebook' ml={10}><a target="_blank" href='https://portal.piaic.org/signup'> Apply For</a></Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex p="1" zIndex={1} w='90%' justifyContent='center' mt='4rem' borderRadius={8} >
                <Flex w={{base:'90%' , lg:"70%"}} flexDir='column' borderRadius={8} border='2px solid #E2E8F0' p={4} boxShadow="1px 1px 6px black">
                    <Heading textAlign='center' size='h1' fontSize='1.5rem'>Note </Heading>
                    <Text>After completing the first two (2) quaters of a single course called Metaverses.You have to choose a specialize track from i.e. Blockchain (BCC) , Clound Native Computing (CNC) , Artificial Intelligence (AI) , Internet Of Things (IOT).Which (special track) you will learn in the 3rd Quater and 4th Quater. After completing 3rd Quater you have to Earn to participate and to go to next quater is called Program in Nutshell.</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}