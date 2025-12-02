import { GamerResponse, PartidaResponse, LogroResponse } from '../interfaze/interface';

export type RootStackParams = {
  GamerScreen: { gamer?: GamerResponse };
  PartidaScreen: { partida?: PartidaResponse };
  LogroScreen: { logro?: LogroResponse };
};