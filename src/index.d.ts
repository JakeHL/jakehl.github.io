declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.inline.svg' {
  import React from 'react';

  const value: React.FC<React.SVGProps<SVGElement>>;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}
