interface NetworkInformation extends EventTarget {
  readonly type: ConnectionType;
  readonly effectiveType: EffectiveConnectionType;
  readonly downlink: number;
  readonly rtt: number;
  readonly saveData: boolean;
}

interface Navigator {
  readonly connection?: NetworkInformation;
}
