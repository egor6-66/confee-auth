/// <reference types="react-scripts" />
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
declare type Component<P = any> = (props?: P) => JSX.Element;
