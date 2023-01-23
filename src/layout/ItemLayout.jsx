import { useNavigate } from "react-router-dom"


export const ItemLayout = ({ children }) => {

  const navigate = useNavigate()

  const onClick = () => {
    navigate(-1);
  }
  return (
    <>
        <button className="m-4 p-2 shadow-xl rounded-lg text-white bg-gradient-to-r from-teal-500 to-teal-700 " onClick={ onClick }>Return</button>
        
        { children }
    </>
  )
}
