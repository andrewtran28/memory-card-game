const keyAPI =  "bdeedb12-5be5-49c5-be53-b7e3d4ec381f";
//https://api.nookipedia.com/villagers?api_key=bdeedb12-5be5-49c5-be53-b7e3d4ec381f

async function getNookipediaData() {
    const url = `https://api.nookipedia.com/villagers?api_key=${(keyAPI)}`;
    
    try {
        const response = await fetch(url, {mode: 'cors' });
        const data = await response.json();
        return onSuccess(data);
    } catch (error) {
        throw new Error("Could not fetch data");
    }
}

function onSuccess(data) {
    console.log("Nookipedia API query request was successful!");
    return data;
}

export default getNookipediaData;