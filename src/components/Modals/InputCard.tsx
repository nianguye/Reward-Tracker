import {Checkbox} from "../ui/checkbox"

type InputCardProps = {
    Title: string;
    Description: string;
  };

const InputCard = ({Title, Description}: InputCardProps) => {
    return(<>

        <div className="font-apple w-1/2 min-h-24 border-4 border-red-500 rounded-xl mt-3">
            <div className="flex justify-center">
                <h2 className="font-bold mt-0">{Title}</h2>
            </div>
            <div className="flex items-center  p-4">
                <Checkbox className="rounded-xl"/>
                <div className="flex flex-col items-center text-center flex-grow w-full">             
                    <p className="w-full break-words px-4">{Description}</p>
                </div>
            </div> 
        </div>
    </>)
}


export default InputCard