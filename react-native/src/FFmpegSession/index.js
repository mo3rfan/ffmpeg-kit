import {AbstractSession} from "../AbstractSession";
import {NativeModules} from "react-native";
import {FFmpegKitFactory} from "../FFmpegKitFactory";

const {FFmpegKitReactNativeModule} = NativeModules;

export class FFmpegSession extends AbstractSession {

  constructor() {
    super();
  }

  static async create(argumentsArray, executeCallback, logCallback, statisticsCallback, logRedirectionStrategy) {
    const session = await AbstractSession.createFFmpegSession(argumentsArray, logRedirectionStrategy);
    const sessionId = session.getSessionId();

    FFmpegKitFactory.setExecuteCallback(sessionId, executeCallback);
    FFmpegKitFactory.setLogCallback(sessionId, logCallback);
    FFmpegKitFactory.setStatisticsCallback(sessionId, statisticsCallback);

    return session;
  }

  static fromMap(sessionMap) {
    return AbstractSession.createFFmpegSessionFromMap(sessionMap);
  }

  getStatisticsCallback() {
    return FFmpegKitFactory.getStatisticsCallback(this.getSessionId());
  }

  getAllStatistics(waitTimeout) {
    return FFmpegKitReactNativeModule.ffmpegSessionGetAllStatistics(this.getSessionId(), FFmpegKitFactory.optionalNumericParameter(waitTimeout)).map(FFmpegKitFactory.mapToStatistics);
  }

  getStatistics() {
    return FFmpegKitReactNativeModule.ffmpegSessionGetStatistics(this.getSessionId()).map(FFmpegKitFactory.mapToStatistics);
  }

  getLastReceivedStatistics() {
    let statistics = this.getStatistics();

    if (statistics.length > 0) {
      return statistics[0];
    } else {
      return undefined;
    }
  }

  isFFmpeg() {
    return true;
  }

  isFFprobe() {
    return false;
  }

}
