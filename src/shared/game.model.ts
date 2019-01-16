import {Deserializable} from "./deserialize.model";
export class Game {
    name: string;
    image: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
      }
  }