import { useEffect , useState } from 'react'
import axios from 'axios'
import { Subnav } from "../Components/subnav";
export function View() {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
      axios.get(`https://cautious-tuna-flip-flops.cyclic.app/`)
        .then(response => setContacts(response.data))
        .catch(error => console.error(error));
    }, []);
    return (
      <>
      <Subnav />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-3/4 p-6">
        {contacts.map((contact, index) => (
          <div key={index} className={`mb-4 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-all rounded-md shadow-md`}>
            <h1 className="text-2xl font-bold mb-2">Project Name: <span>{contact.username}</span></h1>
            <h2 className="text-gray-600 font-black mb-2">User Email: <span className='font-medium'>{contact.email}</span></h2>
            <h2 className="text-gray-600 font-black mb-2">Project Description & URL: <span className='font-medium'> {contact.message}</span></h2>
          </div>
        ))}
      </div>
    </div>
      </>
    )
}
