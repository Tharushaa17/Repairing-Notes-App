import { Link } from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <>
            <div className='mb-10'>
                <p>{today}</p>
            </div>
            <h1 className='mb-5 text-xl'>Welcome! </h1>

            <div className='flex flex-row justify-between m-5'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    <p><Link to="/dash/notes">View Tech Notes</Link></p>
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    <p><Link to="/dash/users">View User Settings</Link></p>
                </button>
            </div>
        </>
           
    )

    return content
}
export default Welcome