export type CharactersType = {
    count: number
    next:string
    previous: string | null
    results: Array<ResponseCharactersType>
}

export type ResponseCharactersType = {
    name: string
    height: string
    birth_year: string
    gender: string
    hair_color: string
    mass: string
    url: string
    id: number
}

export type PlanetsType = {
    results: Array<PlanetsResponseType>
}

export type PlanetsResponseType = {
    name: string
    rotation_period: string
    orbital_period: string
    diameter: string
    climate: string
    gravity: string
    terrain: string
    surface_water: string
    population: string
    residents: Array<string>
    films: Array<string>
    url: string
    id: number
}

export type VehiclesType = {
    results: Array<VehiclesResponseType>
}

export type VehiclesResponseType = {
    name: string
    model: string
    manufacturer: string
    cost_in_credits: string
    length: string
    max_atmosphering_speed: string
    crew: string
    passengers: string
    cargo_capacity: string
    consumables: string
    vehicle_class: string
    pilots: Array<string>
    films: Array<string>
    url: string
    id: number
}

export type FilmsType = {
    results: Array<FilmsResponseType>
}

export type FilmsResponseType = {
    title: string,
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: string
    url: string
    id: number
    characters: Array<string>
    planets: Array<string>
    starships: Array<string>
    vehicles: Array<string>
    species: Array<string>
}

export type SpeciesType = {
    results: Array<SpeciesResponseType>
}

export type SpeciesResponseType = {
    name: string
    classification: string
    designation: string
    average_height: string
    average_lifespan: string
    eye_colors: string
    hair_colors: string
    skin_colors: string
    language: string
    homeworld: string
    people: Array<string>
    films: Array<string>
    url: string
    id: number
}

export type StarshipsType = {
    results: Array<StarshipsResponseType>
}

export type StarshipsResponseType = {
    name: string
    model: string
    starship_class: string
    manufacturer: string
    cost_in_credits: string
    length: string
    crew: string
    passengers: string
    max_atmosphering_speed: string
    hyperdrive_rating: string
    MGLT: string
    cargo_capacity: string
    consumables: string
    films: Array<string>
    pilots: Array<string>
    url: string
    id: number
}