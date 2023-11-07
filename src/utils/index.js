const randomizItems = (countries) => {
    
    const shuffledOptions = countries.sort(() => Math.random() - 0.5);

    return shuffledOptions;
}

const imageURLPath = 'src/assets/country-flags/';

export {
    randomizItems,
    imageURLPath
}