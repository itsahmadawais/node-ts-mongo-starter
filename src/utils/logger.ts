import { createLogger, format, transports } from 'winston';

// Helper function to truncate large objects or strings
const truncateMessage = (message: any, maxLength = 1000) => {
    try {
        let str = typeof message === 'string' ? message : JSON.stringify(message);
        return str.length > maxLength ? str.substring(0, maxLength) + '... [truncated]' : str;
    } catch (err) {
        return '[Unable to stringify object]';
    }
};

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
        format.printf(info => {
            const truncatedMessage = truncateMessage(info.message);
            return `${info.timestamp} ${info.level}: ${truncatedMessage}`;
        })
    ),
    transports: [
        // new transports.Console(),
        // Uncomment if you want to log to files as well
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});

// If not in production, log with colorized output
if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.printf(info => {
                const truncatedMessage = truncateMessage(info.message);
                return `${info.timestamp} ${info.level}: ${truncatedMessage}`;
            })
        )
    }));
}

export default logger;