// app/airlines/[slug]/constants.ts

import { airlinesDataMap } from './data';
import type { AirlineData } from './airlines-data';

// Export types
export type { AirlineData };

// Export the data map
export { airlinesDataMap };

// Helper function to get airline by slug
export const getAirlineBySlug = (slug: string): AirlineData | undefined => {
  return airlinesDataMap[slug];
};

// Get all airline slugs
export const getAirlineSlugs = (): string[] => {
  return Object.keys(airlinesDataMap);
};

// Get all airlines
export const getAllAirlines = (): AirlineData[] => {
  return Object.values(airlinesDataMap);
};

// Export individual airlines for convenience
// European Airlines
export const britishAirways = airlinesDataMap['british-airways'];
export const lufthansa = airlinesDataMap['lufthansa-airlines'];
export const airFrance = airlinesDataMap['air-france-airlines'];
export const klm = airlinesDataMap['klm-royal-dutch-airlines'];
export const swiss = airlinesDataMap['swiss-airlines'];
export const virginAtlantic = airlinesDataMap['virgin-atlantic'];

// Asian Airlines
export const singaporeAirlines = airlinesDataMap['singapore-airlines'];
export const cathayPacific = airlinesDataMap['cathay-airways'];
export const koreanAir = airlinesDataMap['korean-airlines'];
export const philippineAirlines = airlinesDataMap['philippine-airlines'];

// Middle Eastern Airlines
export const emirates = airlinesDataMap['emirates'];
export const etihadAirways = airlinesDataMap['etihad-airways'];
export const qatarAirways = airlinesDataMap['qatar-airways'];
export const kuwaitAirways = airlinesDataMap['kuwait-airways'];

// North American Airlines
export const americanAirlines = airlinesDataMap['american-airlines'];
export const deltaAirlines = airlinesDataMap['delta-airlines'];
export const unitedAirlines = airlinesDataMap['united-airlines'];

// African Airlines
export const ethiopianAirlines = airlinesDataMap['ethiopian-airlines'];
export const egyptAir = airlinesDataMap['egyptair'];

// Oceania Airlines
export const qantasAirlines = airlinesDataMap['qantas-airlines'];
export const airNewZealand = airlinesDataMap['air-new-zealand'];

// Default export
export default airlinesDataMap;