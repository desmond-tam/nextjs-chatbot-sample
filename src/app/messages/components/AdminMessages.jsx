import { headers } from 'next/headers';
import Error from '../../share/Error';
import axios from 'axios';
const AdminMessage = ({item}) => {
    return (
        <div className="flex items-center mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
            <div className="w-10 h-10 bg-gray-300 rounded-full mr-3">
            
            {/*
                the Image is client side rendering 
             <Image src="/images/profile3.png" width={40} height={40} alt="User Avatar" className="w-10 h-10 rounded-full" /> 
             */}
            <img src="/images/profile3.png" width={40} height={40} alt="User Avatar" className="w-10 h-10 rounded-full" />
            </div>
            <div className="flex-1">
            <p className="text-gray-600 text-sm">{item.contents}</p>
            </div>
        </div>
    )
}

export default async function AdminMessages() {
    try {
        // this will be changed to the api providing data.
        // it should not be localhost
        // this hack will work after deploy
        // this part should be in intercepter or common function
        const host = (await headers()).get('host');
        const protocol = host?.startsWith('localhost') ? 'http' : 'https';
        const baseUrl = `${protocol}://${host}`;
        // ********************* 
        let data = [];
        data = await fetch(`${baseUrl}/data/messages.json`)
            .then(res => res.json())
            .catch(err => {
                throw new Error(`Fetch failed with status ${err.status}`); 
            })
       
        return (
            <>
                {data.map(x => (
                    <AdminMessage key={x.id} item={x} />
                ))}
            </>
        )
    } catch (err) {
        return <Error />;
    }
    
}