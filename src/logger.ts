export enum Level {
    "INFO",
    "WARN",
    "ERROR",
    "DEBUG",
    "CRITICAL"
}

export type LogType = "INFO" | "WARN" | "ERROR" | "DEBUG" | "CRITICAL"

const color = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    white: "\x1b[37m",
    bold: "\x1b[1m",
    reset: "\x1b[0m"
}


export default class Logger {

    private static date(): string {
        const date = new Date()
        const covered = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return `[${covered}] ::`
    }

    public static debugMode: boolean = true

    public static log = (type?: Level | LogType, ...content: any): void => {
        /**
         * @param type Specifies the log type. Be like: Level.INFO
         * @param content any type, is the content to be logged.
         */

        // if not have type argument, forced config to INFO
        if (type === undefined || null) type = Level.INFO

        // Converts LogType to Level, which is an Enum
        if (type === "INFO") type = Level.INFO
        if (type === "WARN") type = Level.WARN
        if (type === "ERROR") type = Level.ERROR
        if (type === "DEBUG") type = Level.DEBUG
        if (type === "CRITICAL") type = Level.CRITICAL

        switch (type) {
            case Level.INFO:
                return Logger.info(content)

            case Level.WARN:
                return Logger.warn(content)

            case Level.ERROR:
                return Logger.error(content)

            case Level.DEBUG:
                return Logger.debug(content)

            case Level.CRITICAL:
                return Logger.critical(content)

            default:
                throw new TypeError("The logger must be of one of the following types: INFO, WARN, ERROR, DEBUG, CRITICAL")
        }
    }

    public static info(...content: any) {
        return console.log(color.green, `${this.date()} [INFO] :: ${content}`, color.reset)
    }

    public static warn(...content: any) {
        return console.log(color.yellow, `${this.date()} [WARN] :: ${content}`, color.reset)
    }

    public static error(...content: any) {
        return console.log(color.red, `${this.date()} [ERROR] :: ${content}`, color.reset)
    }

    public static debug(...content: any) {
        if (!this.debugMode) return
        return console.log(color.blue, `${this.date()} [DEBUG] :: ${content}`, color.reset)
    }

    public static critical(...content: any) {
        return console.log(color.red + color.bold, `${this.date()} [CRITICAL] :: ${content}`, color.reset)
    }

}
