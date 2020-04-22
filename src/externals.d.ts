declare module '*';

declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}
