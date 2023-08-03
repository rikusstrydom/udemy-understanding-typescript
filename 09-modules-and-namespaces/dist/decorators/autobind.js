export function autoBind(_target, _methodName, descriptor) {
    return {
        configurable: true,
        get() {
            return descriptor.value.bind(this);
        },
    };
}
