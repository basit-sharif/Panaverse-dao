"use client"
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Programnutshell() {
    useEffect(() => {
        AOS.init({
        });
    }, [])
    return (
        <Flex w='100%' alignItems='center' overflow="hidden" mt={20} justifyContent='center'>
            
            <Flex data-aos='fade-right' flexDirection="column" w='85%' bg='#ddc2c7' borderRadius={6} border='2px solid #7f7f7f' p={{ base: 5, lg: 10 }} boxShadow="1px 1px 4px black" >
                <Flex w='98%' justifyContent='center'>
                    <Heading>Earn while you Learn</Heading>
                </Flex>
                <Flex w="98%" flexDir={{ base: 'column', lg: 'row' }} justifyContent="space-around" mt={{ base: 4, lg: 10 }}>
                    <Image style={{borderRadius:"4px"}} width={450} height={0} alt="Earnwhileyoulearn" src='/earn.jpg' />
                    <Text w={{ base: "100%", lg: "50%" }} mt={{ base: '10px', lg: '0' }}><b>Program in Nutshell :</b> In this program you will first learn in two (2) Quaters.And then after quater 2 in quater 3 you will be able to earn online.You will be able to handle your spends with your money. You will be able to sport your family. Not only you can move to next quater (3) by getting passing marks instead you have to prove that you are earning online so that we will teach you 4th quater.And after that all we will choose you as a teacher or as a panaverse developor if you will be able (on the bases of marks that you would given).We (panaverse community) have to increase export of software from pakistan .We have to increase to 10 Trillion dollar. <Link href="/panaverse#nut" style={{ color: "blueviolet" }} >&nbsp; view more</Link> &nbsp;<Button ml={2} colorScheme="blue" h={7}> Get Enrolled</Button> </Text>
                </Flex>
            </Flex>
        </Flex>
                // <Heading>Panaverse DAO (Decentralize Autonomus Organization)</Heading>
    )
}