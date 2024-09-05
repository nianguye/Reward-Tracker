import React, { useContext } from 'react';

import InputCard from '../components/Modals/InputCard'

const Main = () => {
    let ArrayTest = {
        "Test1" : "Description1",
        "Test2" : "Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2"
    }


    return(
        <>
            <div class="flex flex-col justify-center items-center">
                {Object.entries(ArrayTest).map(([title, description], index) => (
                    <InputCard Title={title} Description={description}></InputCard>
                ))}
            </div>
        </>
    )
}

export default Main