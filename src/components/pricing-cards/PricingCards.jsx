import { ItemLayout } from "../../layout/ItemLayout"
import { Column } from "./Column"


export const PricingCards = () => {

    return (
        <ItemLayout>

            {/* Global Container */}
            <div className="flex items-center justify-center min-h-screen rounded-xl overflow-x-scroll bg-slate-800">
                {/* Inner Container */}
                <div className="flex flex-col m-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
                    {/* Col 1 */}
                    <Column
                        title="Basic"
                        capacity="100GB"
                        price="$1.99/Month"
                        itemText="100 GB of storage"
                        bgColor="bg-slate-700"
                    />
                    {/* Col 2 */}
                    <Column
                        title="Standard"
                        capacity="200GB"
                        price="$3.99/Month"
                        itemText="200 GB of storage"
                        bgColor="bg-violet-600"
                        btnColor="bg-violet-600"
                    />
                    {/* Col 3 */}
                    <Column
                        title="Pro"
                        capacity="2TB"
                        price="$8.99/Month"
                        itemText="2 TB of storage"
                        bgColor="bg-slate-700"
                    />
                </div>
            </div>
        </ItemLayout>
    )
}
