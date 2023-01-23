import { Link } from "react-router-dom"

export const IndexCard = ({ name, image }) => {
    return (
        <Link to={name} className='flex flex-col shadow-xl bg-white rounded-xl p-8 space-y-4 justify-center items-center w-80 h-72 text-xl font-bold font-mono'>
            <h2 className="">{name}</h2> 
            <div className="h-full">
                <img src={image} alt={name} className="rounded-lg h-full object-fill aspect-video" />
            </div>
        </Link>
    )
}
