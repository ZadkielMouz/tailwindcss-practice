import { ItemLayout } from '../../layout'
import { Image } from './Image'
import { MenuItem } from './MenuItems'

import img1 from './images/image1.jpg';
import img2 from './images/image2.jpg';
import img3 from './images/image3.jpg';
import img4 from './images/image4.jpg';
import img5 from './images/image5.jpg';
import img6 from './images/image6.jpg';

const imageArray = [
    img1, img2, img3, img4, img5, img6
]

export const ImageGallery = () => {
    return (
        <ItemLayout>
            {/* Global Container */}
            <div className='flex items-center justify-center min-h-screen bg-cyan-100 rounded-xl shadow-xl overflow-x-scroll'>

                {/* Card Container */}
                <div className='bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-28'>

                    {/* Menu Container */}
                    <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">

                        {/* Menu Items */}

                        <MenuItem name="Vector" />
                        <MenuItem name="Ilustrations" />
                        <MenuItem name="Images" />
                        <MenuItem name="Icons" />

                    </div>

                    {/* Search Container */}
                    <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">

                        {/* Input and SVG Container */}
                        <div className="flex justify-between border-b">
                            <input type="text" className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none" placeholder='Search' />

                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 text-gray-300 duration-200 hover:scale-110"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="10" cy="10" r="7" />
                                    <line x1="21" y1="21" x2="15" y2="15" />
                                </svg>

                            </button>
                        </div>

                        {/* Upload Button */}
                        <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
                            Upload
                        </button>
                    </div>

                    {/* Gallery Container */}
                    <div className="grid gap-4 md:grid-cols-3">
                        {
                            imageArray.map((img) => (
                                <Image key={img} img={img} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </ItemLayout>
    )
}
