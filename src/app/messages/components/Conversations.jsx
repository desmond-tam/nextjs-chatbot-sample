
'use client';
import { useState, useEffect } from 'react';
import Error from '../../share/Error';
import Spinner from '../../share/Spinner';

const IncomingMessage = ({item}) => {
    return (
        <div className="flex mb-4 cursor-pointer">
                <div className="w-9 h-9 rounded-full flex items-center justify-center mr-2">
                    <img src="/images/sarah.png" alt="User Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
                </div>
                <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
                    <p className="text-gray-700">{item.contents}</p>
                </div>
        </div>
    );
}

const OutgoingMessage = ({item}) => {
    return (
        <div className="flex justify-end mb-4 cursor-pointer">
            <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
            <p>{item.contents}</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center ml-2">
            <img src="/images/guest-male.jpg" alt="My Avatar" width={40} height={40} className="w-8 h-8 rounded-full"/>
            </div>
        </div>
    )
}

const Message = ({item}) => {
    if (item.type == 'incoming') {
        return <IncomingMessage item={item} />
    } else {
        return <OutgoingMessage item={item} />
    }
}



export default function Conversations() {
    // this is a client side fetch
    const [messages,setMessages] = useState([]);
    const [showError,setShowError] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        // set the delay to show the spinner
        setTimeout(() => {
            fetch('/data/conversations.json')
                .then(res => res.json())
                .then(data => {
                    setMessages(data);
                })
                .catch(err => {
                    setShowError(true);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }, 3000);
        
    },[]);

    return (
        <>
            {
                (isLoading) && <Spinner />
            }
            {
                (showError) && <Error />
            }
            {
                messages.map(x => (
                   <Message item={x} key={x.id} />
                ))
            }
        </>
    )
}