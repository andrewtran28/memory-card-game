import Caesar from "./Caesar";

const code = "yabbay89-2yb2-16z2-yb20-y4b0a1bz058c";

async function getNookipediaData() {
    const url = `https://api.nookipedia.com/villagers?api_key=${(Caesar(code, 3))}`;
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