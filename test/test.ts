import { Level, Logger } from "../src/logger"

Logger.log("INFO", "Don't dwell on the past.")
Logger.log(Level.INFO, "Believe in yourself.")
Logger.log(Level.WARN, "Seize the day.")
Logger.log(Level.ERROR, "Don't beat yourself up.")
Logger.log(Level.DEBUG, "Past is just past.")
Logger.log(Level.CRITICAL, "Life is a journey.")

Logger.info("Believe in yourself.")
Logger.warn("Seize the day.")
Logger.error("Don't beat yourself up.")
Logger.debug("Past is just past.")
Logger.critical("Life is a journey.")
