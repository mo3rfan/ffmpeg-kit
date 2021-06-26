import {Statistics} from "../Statistics";
import {Log} from "../Log";
import {Session} from "../Session";
import {LogRedirectionStrategy} from "../LogRedirectionStrategy";
import {StatisticsCallback} from "../StatisticsCallback";
import {LogCallback} from "../LogCallback";
import {ExecuteCallback} from "../ExecuteCallback";

export class FFmpegKitFactory {

  static mapToStatistics(statisticsMap: { [key: string]: any }): Statistics;

  static mapToLog(logMap: { [key: string]: any }): Log;

  static mapToSession(sessionMap: { [key: string]: any }): Session;

  static getVersion(): string;

  static getLogRedirectionStrategy(sessionId: number): LogRedirectionStrategy;

  static setLogRedirectionStrategy(sessionId: number, logRedirectionStrategy: LogRedirectionStrategy): void;

  static getExecuteCallback(sessionId: number): ExecuteCallback;

  static setExecuteCallback(sessionId: number, executeCallback: ExecuteCallback): void;

  static getLogCallback(sessionId: number): LogCallback;

  static setLogCallback(sessionId: number, logCallback: LogCallback): void;

  static getStatisticsCallback(sessionId: number): StatisticsCallback;

  static setStatisticsCallback(sessionId: number, statisticsCallback: StatisticsCallback): void;

  static optionalNumericParameter(value: number): number;

  static validDate(time: number): Date;

}
