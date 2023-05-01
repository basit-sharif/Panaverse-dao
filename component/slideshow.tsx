"use client"
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { Zoom } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css"
export default function () {
    const images = [
        "https://media.istockphoto.com/id/1370016371/photo/web3-world-wide-web-based-on-blockchain-incorporating-decentralization-and-token-based.jpg?b=1&s=170667a&w=0&k=20&c=iwKSQ-ZNIScuGVX7q-IMMaJ6eFmePUuprd45oY1727A=",
        "/slide1.jpg",
        "/metaverse.jpg",
        "https://media.istockphoto.com/id/1365534802/photo/artificial-intelligence-in-healthcare-new-ai-applications-in-medicine.jpg?b=1&s=170667a&w=0&k=20&c=eF-CGfuqSOwnbAeptvuK8qcdNE3-_RHIYk_II2T8g9Y=",
        "/artificial.jpg",
        "/blockchain.jpg",
        "https://media.istockphoto.com/id/1397398956/photo/digital-shield-3d-rendering-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=gonGBjgSGHgYEbY5hUHrXRjm8NDY32yWuRKTlYtLRLQ=",
        "/cloundNative.jpg",
        "https://media.istockphoto.com/id/1409475480/photo/document-management-system-automation-software-to-archiving-and-efficiently-manage-and.jpg?b=1&s=170667a&w=0&k=20&c=a2M2hi05TzJn_pQEBK5_xVit3vf8yt9TN2u5wXcFaSs=",
        "https://plus.unsplash.com/premium_photo-1675334896026-b2412c3ca77f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJsb2NrY2hhaW4lMjB0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://media.istockphoto.com/id/1435491075/photo/business-logistics-technology-concept.jpg?b=1&s=170667a&w=0&k=20&c=rC44MqclncroQCuhM9IdK1BzgqFzYWoxWOUIr5KCgBs=",
        "https://media.istockphoto.com/id/1341631834/photo/global-connection-lines-global-business-data-exchange-travel-routes-multi-colored.jpg?b=1&s=170667a&w=0&k=20&c=_16g3na7KmDqVO8tPQ6a2BhjErqLnYwSdAIwYdr0__o=",
        "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?b=1&s=170667a&w=0&k=20&c=rR8QkCJuP2rRLXgDHwHwgZGtqHDFf4WFhIz_FpB9IRs="
    ]
    const zoomInProperties = {
        indicators: true,
        scale: 1.2,
        duration: 2500,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <div style={{ width: '10px', marginRight: "-30px", cursor: 'pointer' }}>
                <ArrowLeftIcon />
            </div>
        ),
        nextArrow: (
            <div style={{ width: '30px', marginLeft: "-100px", cursor: 'pointer' }}>
                <ArrowRightIcon />
            </div>
        )
    }
    return (
        <div style={{ width: "100%", height: "100px" }} >
            <Zoom {...zoomInProperties}>
                {images.map((each, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center', width: "100%", height: "250px" }} >
                        <img style={{ width: '75%', height: '100%', borderRadius: "1rem" }} alt='Web 3.0 and Metaverse' src={each} />
                    </div>
                ))}
            </Zoom>
        </div>
    )
}