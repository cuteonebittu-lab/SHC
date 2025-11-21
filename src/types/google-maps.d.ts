/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
declare namespace google {
  namespace maps {
    interface LatLngLiteral {
      lat: number;
      lng: number;
    }

    interface MapOptions {
      center: LatLngLiteral;
      zoom: number;
      styles?: any[];
    }

    class Map {
      constructor(mapDiv: HTMLElement, options?: MapOptions);
    }

    interface MarkerOptions {
      position: LatLngLiteral;
      map?: Map;
      title?: string;
      icon?: Icon;
    }

    class Marker {
      constructor(options?: MarkerOptions);
    }

    interface Size {
      width: number;
      height: number;
    }

    interface Point {
      x: number;
      y: number;
    }

    interface Icon {
      url?: string;
      scaledSize?: Size;
      anchor?: Point;
    }

    class Size {
      constructor(width: number, height: number);
    }

    class Point {
      constructor(x: number, y: number);
    }
  }
}
