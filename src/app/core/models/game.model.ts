export type GameId = number;

export type Game = {
    id: GameId;
    name: string;
    background_image: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: ReadonlyArray<Genre>;
    parent_platforms: ReadonlyArray<ParentPlatform>;
    publishers: ReadonlyArray<Publishers>;
    ratings: ReadonlyArray<Rating>;
    screenshots: ReadonlyArray<Screenshot>;
    trailers: ReadonlyArray<Trailer>;
};

type Genre = {
    name: string;
};

type ParentPlatform = {
    platform: {
        name: string;
        slug: string;
    };
};

type Publishers = {
    name: string;
};

type Rating = {
    id: number;
    count: number;
    title: string;
};

export type Screenshot = {
    image: string;
};

export type Trailer = {
    data: {
        max: string;
    };
};
