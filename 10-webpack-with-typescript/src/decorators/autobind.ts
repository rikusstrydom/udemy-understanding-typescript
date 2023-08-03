export function autoBind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  return {
    configurable: true,
    get() {
      return descriptor.value.bind(this);
    },
  } as PropertyDescriptor;
}
