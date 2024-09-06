import React, { useContext } from 'react';

import InputCard from '../components/Modals/InputCard'

type TestDescription = {
    [key:string] : string
}

const Main = () => {
    let ArrayTest : TestDescription = {
        "Test1" : "Description1",
        "Test2" : "Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2Description2"
    }


    return(
        <>
            <div className="flex flex-col justify-center items-center">
                {Object.entries(ArrayTest).map(([title, description], index) => (
                    <InputCard Title={title} Description={description}></InputCard>
                ))}
            </div>
        </>
    )
}

export default Main