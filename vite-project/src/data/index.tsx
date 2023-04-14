import React from 'react'


export interface LocationData {
    "id": number
    "name": string
    "type": string
    "dimension": string
    "created": string
    "url": string
    "residents": string
}

export interface EpisodesData {
    "id": number
    "name": string
    "air_date": string
    "episode": string
    "characters": string[]
    "url": string
    "created": string
}

interface Detail {
    "name": string
    "url": string
}
export interface CharacterData {
    "id": number
    "name": string
    "status": string
    "species": string
    "type": string
    "gender": string
    "origin": Detail
    "location": Detail
    "image": string
    "episode": string[]
    "url": string
    "created": string
}


export type DataResponse = (CharacterData | EpisodesData | LocationData)[]