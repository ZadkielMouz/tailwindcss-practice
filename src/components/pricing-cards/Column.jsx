import { ListItem } from "./ListItem"


export const Column = ({title, capacity, price, itemText, bgColor, btnColor}) => {
    return (
        <div className={`${bgColor} rounded-xl text-white`}>
            {/* Upper Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                <div className="text-center uppercase">{title}</div>
                <h2 className="mt-10 font-serif text-5xl text-center">{capacity}</h2>
                <h3 className="mt-2 text-center">{price}</h3>
                <div className="flex justify-center">
                    <a href="#" className={`inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800 ${ btnColor }`}>
                        Purchase
                    </a>
                </div>
            </div>
            {/* Border */}
            <div className="mx-3 border-t border-slate-700"></div>
            {/* Lower Container */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                {/* List Container */}
                <div className="flex flex-col space-y-2">
                    {/* List Item 1 */}
                    <ListItem itemText={itemText} />
                    {/* List Item 2 */}
                    <ListItem itemText={"Option to add numbers"} />
                    {/* List Item 3 */}
                    <ListItem itemText={"Extra member benefits"} />
                </div>
            </div>
        </div>
    )
}
