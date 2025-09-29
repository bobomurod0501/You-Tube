declare module "react-linkify" {
  import * as React from "react";

  interface LinkifyProps {
    children: React.ReactNode;
    componentDecorator?: (
      decoratedHref: string,
      decoratedText: string,
      key: number
    ) => React.ReactNode;
  }

  export default class Linkify extends React.Component<LinkifyProps> {}
}
