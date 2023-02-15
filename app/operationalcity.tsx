import AOS from 'aos'
import 'aos/dist/aos.css';
import { ArrowForwardIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from 'react';
import Location from './icon/location';
import Image from 'next/image';

export default function Operationalcity() {
  useEffect(() => {
    AOS.init({
    });
  }, [])
  return (
    <Flex w='100%' justifyContent='center' py={24}>
      
      <Flex w='93%' flexDir={{base:'column' , lg:'row'}} textAlign='center' alignItems='center' justifyContent={{base:'center' , lg:"space-between"}}>
        <Flex data-aos='fade-down' flexDir='column' alignItems='center' justifyContent='center' w="23rem" h='11rem' borderRadius={5} boxShadow="1px 1px 3px black" >
          <Heading fontSize='1.5rem'>Operational Cities</Heading>
          <Flex justifyContent='space-between' w='100%' pr='10px' >
            <Flex flexDir='column' px={5} >
              <Text><ArrowForwardIcon /> karachi</Text>
              <Text><ArrowForwardIcon /> Lahore</Text>
              <Text><ArrowForwardIcon /> Islamabad</Text>
              <Text><ArrowForwardIcon /> Peshawar</Text>
            </Flex>
            <Location />
          </Flex>
          <Text fontSize='13px' color='blueviolet'><QuestionOutlineIcon /> Timing and date will be mentioned on Email.</Text>
        </Flex>
        <Flex data-aos='fade-down' mt={{base:'14' , lg:'0'}} flexDir='column' alignItems='center' justifyContent='center' w="23rem" h='11rem' borderRadius={5} boxShadow="1px 1px 3px black" >
          <Heading fontSize='1.5rem' mb={1}>Students Enrolled</Heading>
          <Flex justifyContent='space-between' w='100%' pr='10px'>
            <Flex flexDir='column' w='100%' px={5}>
              <Text style={{ listStyle: "lower-roman" }} >karachi <b style={{ color: 'blueviolet' }}> 1500+/1702</b></Text>
              <Text>Lahore <b style={{ color: 'blueviolet' }}> 359+/500</b></Text>
              <Text>Islamabad <b style={{ color: 'blueviolet' }}> 430+/450</b></Text>
              <Text>Peshawar <b style={{ color: 'blueviolet' }}> 400+/500</b></Text>
              <Text>Total <b style={{ color: 'blueviolet' }}> 1992/3502</b></Text>
            </Flex>
            <Image height={2} width={110} alt='Students Enrolled' src='/studentsenroll.png' />
          </Flex>
        </Flex>
        <Flex data-aos='fade-down' mt={{base:'14' , lg:'0'}} flexDir='column' alignItems='center' w="23rem" h='11rem' pt={1} borderRadius={5} boxShadow="1px 1px 3px black" >
          <Heading fontSize='1.5rem'>Instructors</Heading>
          <Flex flexDir='column' justifyContent="center" w='100%' h="80%" px={5}>
            <Flex justifyContent='space-between' w='100%' pr='10px'>
              <Heading fontSize='2.6rem'> 50+ </Heading>
              <Image height={1} width={90} alt='Instructor' src='/instructor.svg' />
            </Flex>
            <Text>Qualified Teachers</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}