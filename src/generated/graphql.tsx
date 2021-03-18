import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Root = {
  __typename?: 'Root';
  allFilms?: Maybe<FilmsConnection>;
  film?: Maybe<Film>;
  allPeople?: Maybe<PeopleConnection>;
  person?: Maybe<Person>;
  allPlanets?: Maybe<PlanetsConnection>;
  planet?: Maybe<Planet>;
  allSpecies?: Maybe<SpeciesConnection>;
  species?: Maybe<Species>;
  allStarships?: Maybe<StarshipsConnection>;
  starship?: Maybe<Starship>;
  allVehicles?: Maybe<VehiclesConnection>;
  vehicle?: Maybe<Vehicle>;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
};


export type RootAllFilmsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootFilmArgs = {
  id?: Maybe<Scalars['ID']>;
  filmID?: Maybe<Scalars['ID']>;
};


export type RootAllPeopleArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootPersonArgs = {
  id?: Maybe<Scalars['ID']>;
  personID?: Maybe<Scalars['ID']>;
};


export type RootAllPlanetsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootPlanetArgs = {
  id?: Maybe<Scalars['ID']>;
  planetID?: Maybe<Scalars['ID']>;
};


export type RootAllSpeciesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootSpeciesArgs = {
  id?: Maybe<Scalars['ID']>;
  speciesID?: Maybe<Scalars['ID']>;
};


export type RootAllStarshipsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootStarshipArgs = {
  id?: Maybe<Scalars['ID']>;
  starshipID?: Maybe<Scalars['ID']>;
};


export type RootAllVehiclesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type RootVehicleArgs = {
  id?: Maybe<Scalars['ID']>;
  vehicleID?: Maybe<Scalars['ID']>;
};


export type RootNodeArgs = {
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmsConnection = {
  __typename?: 'FilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type FilmsEdge = {
  __typename?: 'FilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single film. */
export type Film = Node & {
  __typename?: 'Film';
  /** The title of this film. */
  title?: Maybe<Scalars['String']>;
  /** The episode number of this film. */
  episodeID?: Maybe<Scalars['Int']>;
  /** The opening paragraphs at the beginning of this film. */
  openingCrawl?: Maybe<Scalars['String']>;
  /** The name of the director of this film. */
  director?: Maybe<Scalars['String']>;
  /** The name(s) of the producer(s) of this film. */
  producers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The ISO 8601 date format of film release at original creator country. */
  releaseDate?: Maybe<Scalars['String']>;
  speciesConnection?: Maybe<FilmSpeciesConnection>;
  starshipConnection?: Maybe<FilmStarshipsConnection>;
  vehicleConnection?: Maybe<FilmVehiclesConnection>;
  characterConnection?: Maybe<FilmCharactersConnection>;
  planetConnection?: Maybe<FilmPlanetsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single film. */
export type FilmSpeciesConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmStarshipConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmVehicleConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmCharacterConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single film. */
export type FilmPlanetConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

/** A connection to a list of items. */
export type FilmSpeciesConnection = {
  __typename?: 'FilmSpeciesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmSpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
};

/** An edge in a connection. */
export type FilmSpeciesEdge = {
  __typename?: 'FilmSpeciesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A type of person or character within the Star Wars Universe. */
export type Species = Node & {
  __typename?: 'Species';
  /** The name of this species. */
  name?: Maybe<Scalars['String']>;
  /** The classification of this species, such as "mammal" or "reptile". */
  classification?: Maybe<Scalars['String']>;
  /** The designation of this species, such as "sentient". */
  designation?: Maybe<Scalars['String']>;
  /** The average height of this species in centimeters. */
  averageHeight?: Maybe<Scalars['Float']>;
  /** The average lifespan of this species in years, null if unknown. */
  averageLifespan?: Maybe<Scalars['Int']>;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Common hair colors for this species, null if this species does not typically
   * have hair.
   */
  hairColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * Common skin colors for this species, null if this species does not typically
   * have skin.
   */
  skinColors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The language commonly spoken by this species. */
  language?: Maybe<Scalars['String']>;
  /** A planet that this species originates from. */
  homeworld?: Maybe<Planet>;
  personConnection?: Maybe<SpeciesPeopleConnection>;
  filmConnection?: Maybe<SpeciesFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesPersonConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A type of person or character within the Star Wars Universe. */
export type SpeciesFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type Planet = Node & {
  __typename?: 'Planet';
  /** The name of this planet. */
  name?: Maybe<Scalars['String']>;
  /** The diameter of this planet in kilometers. */
  diameter?: Maybe<Scalars['Int']>;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod?: Maybe<Scalars['Int']>;
  /**
   * The number of standard days it takes for this planet to complete a single orbit
   * of its local star.
   */
  orbitalPeriod?: Maybe<Scalars['Int']>;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity?: Maybe<Scalars['String']>;
  /** The average population of sentient beings inhabiting this planet. */
  population?: Maybe<Scalars['Float']>;
  /** The climates of this planet. */
  climates?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The terrains of this planet. */
  terrains?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The percentage of the planet surface that is naturally occuring water or bodies
   * of water.
   */
  surfaceWater?: Maybe<Scalars['Float']>;
  residentConnection?: Maybe<PlanetResidentsConnection>;
  filmConnection?: Maybe<PlanetFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetResidentConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/**
 * A large mass, planet or planetoid in the Star Wars Universe, at the time of
 * 0 ABY.
 */
export type PlanetFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PlanetResidentsConnection = {
  __typename?: 'PlanetResidentsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetResidentsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  residents?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PlanetResidentsEdge = {
  __typename?: 'PlanetResidentsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An individual person or character within the Star Wars universe. */
export type Person = Node & {
  __typename?: 'Person';
  /** The name of this person. */
  name?: Maybe<Scalars['String']>;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear?: Maybe<Scalars['String']>;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor?: Maybe<Scalars['String']>;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender?: Maybe<Scalars['String']>;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor?: Maybe<Scalars['String']>;
  /** The height of the person in centimeters. */
  height?: Maybe<Scalars['Int']>;
  /** The mass of the person in kilograms. */
  mass?: Maybe<Scalars['Float']>;
  /** The skin color of this person. */
  skinColor?: Maybe<Scalars['String']>;
  /** A planet that this person was born on or inhabits. */
  homeworld?: Maybe<Planet>;
  filmConnection?: Maybe<PersonFilmsConnection>;
  /** The species that this person belongs to, or null if unknown. */
  species?: Maybe<Species>;
  starshipConnection?: Maybe<PersonStarshipsConnection>;
  vehicleConnection?: Maybe<PersonVehiclesConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** An individual person or character within the Star Wars universe. */
export type PersonFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonStarshipConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** An individual person or character within the Star Wars universe. */
export type PersonVehicleConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type PersonFilmsConnection = {
  __typename?: 'PersonFilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PersonFilmsEdge = {
  __typename?: 'PersonFilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonStarshipsConnection = {
  __typename?: 'PersonStarshipsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type PersonStarshipsEdge = {
  __typename?: 'PersonStarshipsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single transport craft that has hyperdrive capability. */
export type Starship = Node & {
  __typename?: 'Starship';
  /** The name of this starship. The common name, such as "Death Star". */
  name?: Maybe<Scalars['String']>;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model?: Maybe<Scalars['String']>;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass?: Maybe<Scalars['String']>;
  /** The manufacturers of this starship. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The cost of this starship new, in galactic credits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** The length of this starship in meters. */
  length?: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this starship. */
  crew?: Maybe<Scalars['String']>;
  /** The number of non-essential people this starship can transport. */
  passengers?: Maybe<Scalars['String']>;
  /**
   * The maximum speed of this starship in atmosphere. null if this starship is
   * incapable of atmosphering flight.
   */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  /** The class of this starships hyperdrive. */
  hyperdriveRating?: Maybe<Scalars['Float']>;
  /**
   * The Maximum number of Megalights this starship can travel in a standard hour.
   * A "Megalight" is a standard unit of distance and has never been defined before
   * within the Star Wars universe. This figure is only really useful for measuring
   * the difference in speed of starships. We can assume it is similar to AU, the
   * distance between our Sun (Sol) and Earth.
   */
  MGLT?: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this starship can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']>;
  pilotConnection?: Maybe<StarshipPilotsConnection>;
  filmConnection?: Maybe<StarshipFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipPilotConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single transport craft that has hyperdrive capability. */
export type StarshipFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type StarshipPilotsConnection = {
  __typename?: 'StarshipPilotsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipPilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type StarshipPilotsEdge = {
  __typename?: 'StarshipPilotsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipFilmsConnection = {
  __typename?: 'StarshipFilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type StarshipFilmsEdge = {
  __typename?: 'StarshipFilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PersonVehiclesConnection = {
  __typename?: 'PersonVehiclesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type PersonVehiclesEdge = {
  __typename?: 'PersonVehiclesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A single transport craft that does not have hyperdrive capability */
export type Vehicle = Node & {
  __typename?: 'Vehicle';
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name?: Maybe<Scalars['String']>;
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model?: Maybe<Scalars['String']>;
  /** The class of this vehicle, such as "Wheeled" or "Repulsorcraft". */
  vehicleClass?: Maybe<Scalars['String']>;
  /** The manufacturers of this vehicle. */
  manufacturers?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The cost of this vehicle new, in Galactic Credits. */
  costInCredits?: Maybe<Scalars['Float']>;
  /** The length of this vehicle in meters. */
  length?: Maybe<Scalars['Float']>;
  /** The number of personnel needed to run or pilot this vehicle. */
  crew?: Maybe<Scalars['String']>;
  /** The number of non-essential people this vehicle can transport. */
  passengers?: Maybe<Scalars['String']>;
  /** The maximum speed of this vehicle in atmosphere. */
  maxAtmospheringSpeed?: Maybe<Scalars['Int']>;
  /** The maximum number of kilograms that this vehicle can transport. */
  cargoCapacity?: Maybe<Scalars['Float']>;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables?: Maybe<Scalars['String']>;
  pilotConnection?: Maybe<VehiclePilotsConnection>;
  filmConnection?: Maybe<VehicleFilmsConnection>;
  /** The ISO 8601 date format of the time that this resource was created. */
  created?: Maybe<Scalars['String']>;
  /** The ISO 8601 date format of the time that this resource was edited. */
  edited?: Maybe<Scalars['String']>;
  /** The ID of an object */
  id: Scalars['ID'];
};


/** A single transport craft that does not have hyperdrive capability */
export type VehiclePilotConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


/** A single transport craft that does not have hyperdrive capability */
export type VehicleFilmConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type VehiclePilotsConnection = {
  __typename?: 'VehiclePilotsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclePilotsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  pilots?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type VehiclePilotsEdge = {
  __typename?: 'VehiclePilotsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehicleFilmsConnection = {
  __typename?: 'VehicleFilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehicleFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type VehicleFilmsEdge = {
  __typename?: 'VehicleFilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetFilmsConnection = {
  __typename?: 'PlanetFilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type PlanetFilmsEdge = {
  __typename?: 'PlanetFilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesPeopleConnection = {
  __typename?: 'SpeciesPeopleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesPeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type SpeciesPeopleEdge = {
  __typename?: 'SpeciesPeopleEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesFilmsConnection = {
  __typename?: 'SpeciesFilmsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesFilmsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  films?: Maybe<Array<Maybe<Film>>>;
};

/** An edge in a connection. */
export type SpeciesFilmsEdge = {
  __typename?: 'SpeciesFilmsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Film>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmStarshipsConnection = {
  __typename?: 'FilmStarshipsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmStarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type FilmStarshipsEdge = {
  __typename?: 'FilmStarshipsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmVehiclesConnection = {
  __typename?: 'FilmVehiclesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmVehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type FilmVehiclesEdge = {
  __typename?: 'FilmVehiclesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmCharactersConnection = {
  __typename?: 'FilmCharactersConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmCharactersEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  characters?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type FilmCharactersEdge = {
  __typename?: 'FilmCharactersEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type FilmPlanetsConnection = {
  __typename?: 'FilmPlanetsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<FilmPlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type FilmPlanetsEdge = {
  __typename?: 'FilmPlanetsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PeopleEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  people?: Maybe<Array<Maybe<Person>>>;
};

/** An edge in a connection. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** The item at the end of the edge */
  node?: Maybe<Person>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type PlanetsConnection = {
  __typename?: 'PlanetsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PlanetsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  planets?: Maybe<Array<Maybe<Planet>>>;
};

/** An edge in a connection. */
export type PlanetsEdge = {
  __typename?: 'PlanetsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Planet>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type SpeciesConnection = {
  __typename?: 'SpeciesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SpeciesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  species?: Maybe<Array<Maybe<Species>>>;
};

/** An edge in a connection. */
export type SpeciesEdge = {
  __typename?: 'SpeciesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Species>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type StarshipsConnection = {
  __typename?: 'StarshipsConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StarshipsEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  starships?: Maybe<Array<Maybe<Starship>>>;
};

/** An edge in a connection. */
export type StarshipsEdge = {
  __typename?: 'StarshipsEdge';
  /** The item at the end of the edge */
  node?: Maybe<Starship>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A connection to a list of items. */
export type VehiclesConnection = {
  __typename?: 'VehiclesConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<VehiclesEdge>>>;
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount?: Maybe<Scalars['Int']>;
  /**
   * A list of all of the objects returned in the connection. This is a convenience
   * field provided for quickly exploring the API; rather than querying for
   * "{ edges { node } }" when no edge data is needed, this field can be be used
   * instead. Note that when clients like Relay need to fetch the "cursor" field on
   * the edge to enable efficient pagination, this shortcut cannot be used, and the
   * full "{ edges { node } }" version should be used instead.
   */
  vehicles?: Maybe<Array<Maybe<Vehicle>>>;
};

/** An edge in a connection. */
export type VehiclesEdge = {
  __typename?: 'VehiclesEdge';
  /** The item at the end of the edge */
  node?: Maybe<Vehicle>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations. */
export type __Schema = {
  __typename?: '__Schema';
  description?: Maybe<Scalars['String']>;
  /** A list of all types supported by this server. */
  types: Array<__Type>;
  /** The type that query operations will be rooted at. */
  queryType: __Type;
  /** If this server supports mutation, the type that mutation operations will be rooted at. */
  mutationType?: Maybe<__Type>;
  /** If this server support subscription, the type that subscription operations will be rooted at. */
  subscriptionType?: Maybe<__Type>;
  /** A list of all directives supported by this server. */
  directives: Array<__Directive>;
};

/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __Type = {
  __typename?: '__Type';
  kind: __TypeKind;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  specifiedByUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<__Field>>;
  interfaces?: Maybe<Array<__Type>>;
  possibleTypes?: Maybe<Array<__Type>>;
  enumValues?: Maybe<Array<__EnumValue>>;
  inputFields?: Maybe<Array<__InputValue>>;
  ofType?: Maybe<__Type>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeEnumValuesArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};


/**
 * The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.
 *
 * Depending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name, description and optional `specifiedByUrl`, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.
 */
export type __TypeInputFieldsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** An enum describing what kind of type a given `__Type` is. */
export enum __TypeKind {
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is an object. `fields` and `interfaces` are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields. */
  Interface = 'INTERFACE',
  /** Indicates this type is a union. `possibleTypes` is a valid field. */
  Union = 'UNION',
  /** Indicates this type is an enum. `enumValues` is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. `inputFields` is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /** Indicates this type is a list. `ofType` is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. `ofType` is a valid field. */
  NonNull = 'NON_NULL'
}

/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __Field = {
  __typename?: '__Field';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  args: Array<__InputValue>;
  type: __Type;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};


/** Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type. */
export type __FieldArgsArgs = {
  includeDeprecated?: Maybe<Scalars['Boolean']>;
};

/** Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value. */
export type __InputValue = {
  __typename?: '__InputValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type: __Type;
  /** A GraphQL-formatted string representing the default value for this input value. */
  defaultValue?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/** One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string. */
export type __EnumValue = {
  __typename?: '__EnumValue';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  deprecationReason?: Maybe<Scalars['String']>;
};

/**
 * A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.
 *
 * In some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.
 */
export type __Directive = {
  __typename?: '__Directive';
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  isRepeatable: Scalars['Boolean'];
  locations: Array<__DirectiveLocation>;
  args: Array<__InputValue>;
};

/** A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies. */
export enum __DirectiveLocation {
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION'
}

export type PlaceholderQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaceholderQueryQuery = (
  { __typename?: 'Root' }
  & { __schema: (
    { __typename?: '__Schema' }
    & Pick<__Schema, 'description'>
  ) }
);


export const PlaceholderQueryDocument = gql`
    query placeholderQuery {
  __schema {
    description
  }
}
    `;

/**
 * __usePlaceholderQueryQuery__
 *
 * To run a query within a React component, call `usePlaceholderQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlaceholderQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlaceholderQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlaceholderQueryQuery(baseOptions?: Apollo.QueryHookOptions<PlaceholderQueryQuery, PlaceholderQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlaceholderQueryQuery, PlaceholderQueryQueryVariables>(PlaceholderQueryDocument, options);
      }
export function usePlaceholderQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlaceholderQueryQuery, PlaceholderQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlaceholderQueryQuery, PlaceholderQueryQueryVariables>(PlaceholderQueryDocument, options);
        }
export type PlaceholderQueryQueryHookResult = ReturnType<typeof usePlaceholderQueryQuery>;
export type PlaceholderQueryLazyQueryHookResult = ReturnType<typeof usePlaceholderQueryLazyQuery>;
export type PlaceholderQueryQueryResult = Apollo.QueryResult<PlaceholderQueryQuery, PlaceholderQueryQueryVariables>;