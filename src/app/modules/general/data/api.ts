export interface SMA {
  'Meta Data':  Record<string, string>;
  'Technical Analysis: SMA': Record<string, {SMA: string}>;
}

export interface SMAProperties {
  symbol: string;
  interval: string;
  timePeriod: number;
  seriesType: string;
}
