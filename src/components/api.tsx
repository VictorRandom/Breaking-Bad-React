export const BreakingBadApi = async (data: any) => {
    try{
        const url = `https://www.breakingbadapi.com/api/`;
        const res = await fetch(url)
        const data = await res.json()
        return data;
    } catch(e){
        console.log(e);
    }
}
