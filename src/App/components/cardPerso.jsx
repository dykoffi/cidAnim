import React from "react"
import { IconButton } from '@fluentui/react/lib/Button';

const CardPerso = ({ image }) => {

    return (
        <div className="shadow-md hover:shadow-lg cursor-pointer select-none hover:bg-blue-100">
            <div className="flex">
                <div  style={{ backgroundImage: `url(${image})`, flex: 2 }} className="bg-cover bg-center"></div>
                <div style={{ flex: 3 }} className="p-4">
                    <div>
                        <h5 className="text-blue-900"><b>Edy KOFFI</b></h5>
                        <h6 className="text-gray-400 text-xs font-bold">Chef de projet digital</h6>
                        <h6 className="text-blue-400 text-xs">IT 6</h6>
                    </div>
                    {/* <div className="flex justify-end mt-2">
                        <IconButton iconProps={{ iconName: 'AllApps' }} />
                        <IconButton iconProps={{ iconName: 'Delete' }} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default CardPerso