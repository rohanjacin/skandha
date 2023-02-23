import { Web3 } from "relayer/lib/modules";

export class Web3API {
  constructor(private web3Module: Web3) {}

  clientVersion(): string {
    return this.web3Module.clientVersion();
  }
}
