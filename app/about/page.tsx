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
        <Image style={{ borderRadius: "50%" , padding:"3px", border: "3px solid #DDC2C7" }} width='120' height='130' alt='Dr.Arif Alvi' src="/dr.arif.jpg" />
        <Heading fontWeight={400} mt='6'>Dr.Arif Alvi</Heading>
        <Text mt={2}>President of the Islamic Republic of Pakistan</Text>
        <Flex mt='5' justifyContent="space-between" w="4rem">
          <a target="_blank" href='https://web.facebook.com/Dr.ArifAlvi/?_rdc=1&_rdr'><Facebook /></a>
          <a target="_blank" href='https://twitter.com/ArifAlvi'><Twitter /></a>
        </Flex>
        <Text data-aos="fade-right" mt={'3rem'}>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
          <br />
          <br />
          Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.
          <br />
          <br />
          President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.
          <br />
          <br />
          Dr. Arif Alvi’s political career commenced with his pro-democracy struggle against the dictatorship of General Ayub Khan. He is a founding member of Pakistan Tehreek-e-Insaf (PTI) that came into being in 1996. He remained a member of the PTI’s Central Executive Committee since its inception and has held the offices of PTI President of Sindh (1997-2001), Central Vice President (2001-2006) and Secretary General (2006-2013). In line with Constitution of Pakistan, he resigned from all the positions of PTI before assuming the prestigious office of the President.
          <br />
          <br />
          During his tenure as the Secretary General of the party, Dr. Arif Alvi introduced social media platform in the politics of Pakistan. He was instrumental in holding intra-party election (2012-2013) and enabled millions of party members to digitally participate in the election process. He was elected as member of National Assembly from Karachi in 2013 and 2018 and was instrumental in drafting and the passage of many bills including one on Alternate Dispute Resolution. He also chaired the sub-committee of EVM’s, Digital Identification of voters and voting of overseas Pakistanis. The latter has finally come to fruition. Dr. Arif Alvi has keen interest in education and health sectors. Provision of basic facilities to the common man and uplifting the country’s image are very close to his heart. He considers people of Pakistan as the most precious asset and, therefore, accords special focus to human resource development in the country. He is happily married and has four children.
        </Text>
      </Flex>
    </ChakraProvider>
  )
}