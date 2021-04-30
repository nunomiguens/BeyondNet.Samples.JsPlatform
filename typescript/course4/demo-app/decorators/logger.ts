import { ConsoleLogger, FileLogger, BaseLogger } from './loggers';
import { ConfigStructure } from './config-structure';
import { defaultConfig, DefaultFileSystemHost } from './config';

export class MainFactory {
    private static cachedInstance: MainFactory;
    private consoleLogger: ConsoleLogger;
    private fileLogger: FileLogger;

    private constructor(private readonly config: ConfigStructure) {}

    static get instance(): MainFactory {
        return MainFactory.cachedInstance || (MainFactory.cachedInstance = new MainFactory(defaultConfig));
    }

    getLogger(): BaseLogger {
        return this.getConsoleLogger();
    }

    getConsoleLogger(): ConsoleLogger {
        return this.consoleLogger || (this.consoleLogger = new ConsoleLogger());
    }

    getFileLogger(): FileLogger {
        return (
            this.fileLogger || (this.fileLogger = new FileLogger(new DefaultFileSystemHost(), this.config.log.fileName))
        );
    }
}

export function BaseLog(logger: BaseLogger) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (
        target: unknown,
        methodName: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        descriptor: TypedPropertyDescriptor<any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ): TypedPropertyDescriptor<any> => {
        const originalMethod = descriptor.value;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        descriptor.value = function (...args: any[]) {
            const returnValue = originalMethod.apply(this, args);

            logger.log(
                `Called '${methodName}'\n` +
                    `Arguments: ${JSON.stringify(args)}\n` +
                    `Return value: ${JSON.stringify(returnValue)}`,
            );
        };

        return descriptor;
    };
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Log(): any {
    return BaseLog(MainFactory.instance.getLogger());
}
