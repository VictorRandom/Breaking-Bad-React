export const PokemonApi = async (pokemon: any) => {
    try{
        const url = `https://pokeapi.co/api/v2/pokemon/1`
        const res = await fetch(url)
        const data = await res.json()
        // console.log(data)
        return data
    } catch(e){
        console.log(e);
    }
}
