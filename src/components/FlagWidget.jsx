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
        <div className="relative left-[450px] w-[900px] h-[800px] mt-36">
            <img src={`${imageURLPath}${currentFlagUrl.toLowerCase()}.png`} alt="FLAG" 
                className="rounded object-fill cursor-pointer backdrop-blur-xl"
            />
        </div>
    )
}

export default FlagWidget