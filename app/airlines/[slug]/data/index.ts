// app/airlines/[slug]/data/index.ts

import type { AirlineData } from '../airlines-data';

// European Airlines
import { britishAirwaysData } from './british-airways';
import { lufthansaData } from './lufthansa-airlines';
import { airFranceData } from './airfrance-airlines';
import { klmData } from './klm-royal-dutch-airlines';
import { swissData } from './swiss-international-air-lines';
import { virginAtlanticData } from './virgin-atlantic';

// Asian Airlines
import { singaporeAirlinesData } from './singapore-airlines';
import { cathayPacificData } from './cathay-pacific-airways';        // ← Fixed: should be cathay-pacific.ts
import { koreanAirData } from './korean-air';                // ← Fixed: should be korean-air.ts
import { philippineAirlinesData } from './philippine-airlines';

// Middle Eastern Airlines
import { emiratesData } from './emirates';
import { etihadAirwaysData } from './etihad-airways';
import { qatarAirwaysData } from './qatar-airways';
import { kuwaitAirwaysData } from './kuwait-airways';

// North American Airlines
import { americanAirlinesData } from './american-airlines';
import { deltaAirlinesData } from './delta-airlines';
import { unitedAirlinesData } from './united-airlines';

// African Airlines
import { ethiopianAirlinesData } from './ethiopian-airlines';
import { egyptAirData } from './egyptair';

// Oceania Airlines
import { qantasAirlinesData } from './qantas-airlines';
import { airNewZealandData } from './air-new-zealand';

export const airlinesDataMap: Record<string, AirlineData> = {
  // European Airlines
  'british-airways': britishAirwaysData,
  'lufthansa-airlines': lufthansaData,
  'air-france-airlines': airFranceData,
  'klm-royal-dutch-airlines': klmData,
  'swiss-international-air-lines': swissData,
  'virgin-atlantic': virginAtlanticData,

  // Asian Airlines
  'singapore-airlines': singaporeAirlinesData,
  'cathay-pacific-airways': cathayPacificData,
  'korean-air': koreanAirData,
  'philippine-airlines': philippineAirlinesData,

  // Middle Eastern Airlines
  'emirates': emiratesData,
  'etihad-airways': etihadAirwaysData,
  'qatar-airways': qatarAirwaysData,
  'kuwait-airways': kuwaitAirwaysData,

  // North American Airlines
  'american-airlines': americanAirlinesData,
  'delta-airlines': deltaAirlinesData,
  'united-airlines': unitedAirlinesData,

  // African Airlines
  'ethiopian-airlines': ethiopianAirlinesData,
  'egyptair': egyptAirData,

  // Oceania Airlines
  'qantas-airlines': qantasAirlinesData,
  'air-new-zealand': airNewZealandData,
};

// Export all individual data
export {
  // European Airlines
  britishAirwaysData,
  lufthansaData,
  airFranceData,
  klmData,
  swissData,
  virginAtlanticData,

  // Asian Airlines
  singaporeAirlinesData,
  cathayPacificData,
  koreanAirData,
  philippineAirlinesData,

  // Middle Eastern Airlines
  emiratesData,
  etihadAirwaysData,
  qatarAirwaysData,
  kuwaitAirwaysData,

  // North American Airlines
  americanAirlinesData,
  deltaAirlinesData,
  unitedAirlinesData,

  // African Airlines
  ethiopianAirlinesData,
  egyptAirData,

  // Oceania Airlines
  qantasAirlinesData,
  airNewZealandData,
};

export default airlinesDataMap;