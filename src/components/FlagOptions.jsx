import React, { useEffect, useState } from "react";
import { randomizItems } from "../utils";


const FlagOptions = ({countries}) => {
    const [ selectedOption, setSelectedOption ] = useState('')
    
    const [ options, setOptions ] = useState([]);

    const handleChangeOption = (e) => {
        setSelectedOption(e.target.value)
    }

    useEffect(() => {
        randomizOptions();
        const interval = setInterval(randomizOptions, 10000)

        return () => {
            clearInterval(interval)
        };
    }, []);

    const randomizOptions = () => {
        const shuffledOptions = randomizItems(countries);

        setOptions(shuffledOptions.slice(0, 4));
    }

    return (
        <div className="radio flex flex-col">
            {
                options.map((option, index) => (
                    <label key={index} className="mx-8 my-8 text-[24px] text-secondary">
                        <input type="radio"
                        className="mx-8 align-middle h-8 w-8"
                        value={option.name} 
                        checked={selectedOption === option.name}
                        onChange={handleChangeOption}
                        />
                        {option.name}
                    </label>
                ))
            }
        </div>
    )
}

export default FlagOptions