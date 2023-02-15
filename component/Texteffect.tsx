import React, { useEffect } from 'react'
import { setTimeout } from 'timers';
import Typewriter from 'typewriter-effect';

export default function Input() {
    const paccks = ["Revolutionize Pakistan", "Reshape Pakistan" , "Develope Pakistan" , "Build Pakistan", "Create Pakistan","Learn Programing" , "Become Great"];

    return (
        <>
            {
                < Typewriter
                    onInit={(typewriter) => {
                        paccks.map((item: any) => {
                            typewriter.typeString(item)
                                .callFunction(() => {
                                    console.log('String typed out!');
                                })
                                .pauseFor(4000)
                                .deleteAll()
                                .callFunction(() => {
                                    console.log('All strings were deleted');
                                })
                                .start();
                        })
                    }}
                />
            }
        </>
    )
}


