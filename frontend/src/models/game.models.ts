import { User } from './user.models';
import { Atletica } from './team.models';

export interface Modalidade {
  id?: number;
  nome: string;
  icone: string;
}

export interface Game {
  id?: number;
  modalidade: Modalidade;
  time1: Atletica;
  time2: Atletica;
  placar1: number;
  placar2: number;
  local: string;
  data: string;
  finalizado?: boolean;
  cancelado?: boolean;
  wo_id?: number;
  created_at?: string;
  edited_by: User;
}