import React, {useEffect, useState} from "react";
import { randomizItems, imageURLPath } from "../utils";

const FlagWidget = ({countries}) => {
    const [ currentFlagUrl, setCurrentFlagUrl ] = useState(countries[0].code)
  
    
    useEffect(() => {
        const randomImages = randomizItems(countries)
        let country_code = randomImages.slice(0, 1)[0].code;
        return () =>{
            setCurrentFlagUrl(country_code);
        }
    }
    , [countries]
    )
    
    return (
        <div className="relative left-[450px] w-[900px] h-[800px] mt-36">
            <img src={`${imageURLPath}${currentFlagUrl.toLowerCase()}.png`} alt="FLAG" 
                className="rounded object-fill cursor-pointer backdrop-blur-xl"
            />
        </div>
    )
}

export default FlagWidget