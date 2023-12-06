import React, {useEffect, useState} from "react";
import { randomizItems, imageURLPath } from "../utils";

const FlagWidget = ({countries}) => {
    const [ currentFlagUrl, setCurrentFlagUrl ] = useState(countries[0].code)
  
    
    useEffect(() => {
        randomizeImage();

        const interval = setInterval(randomizeImage, 10000)

        return () =>{
            clearInterval(interval);
        }
    }
    , [countries]
    );

    const randomizeImage = () => {
        const randomImages = randomizItems(countries)
        let country_code = randomImages.slice(0, 1)[0].code;
        setCurrentFlagUrl(country_code);
    }
    
    return (
        <div className="max-w-[33.3%] mt-36">
            <img src={`${imageURLPath}${currentFlagUrl.toLowerCase()}.png`} alt="FLAG" 
                className="rounded-2xl mr-auto ml-auto block object-fill cursor-pointer backdrop-blur-xl"
            />
        </div>
    )
}

export default FlagWidget