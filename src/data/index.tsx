import React from 'react'
import episode from "./JSON/episode.json"
import location from "./JSON/location.json"
import characters from "./JSON/characters.json"

export interface LocationData {
    "id": number
    "name": string
    "type": string
    "dimension": string
    "created": string
}

export interface EpisodesData {
    "id": number
    "name": string
    "air_date": string
    "episode": string
    "created": string
}

export interface CharacterData {
    "id": number
    "name": string
    "status": string
    "species": string
    "type": string
    "gender": string
    "image": string
    "created": string
}

export function locationData(): LocationData[] {
    return location
}

export function episodeData(): EpisodesData[] {
    return episode
}

export function charactersData(): CharacterData[] {
    return characters
}