# Enhanced type definitions for @arcgis/core

Provides better TypeScript support for the global `$arcgis.import` function, than the type definition from the `@arcgis/core-adapter` module.

Allows you to do this in TypeScript:

```typescript
const [Map, WebTileLayer] = await $arcgis.import(["@arcgis/core/Map", "@arcgis/core/layers/WebTileLayer"] as const);
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer");
const locateBetweenOperator = await $arcgis.import("@arcgis/core/geometry/operators/locateBetweenOperator");
```

Instead of this

```typescript
const [EsriMap, WebTileLayer] = await window.$arcgis.import<
  [typeof __esri.Map, typeof __esri.WebTileLayer]
>(["@arcgis/core/Map", "@arcgis/core/layers/WebTileLayer"] as const);
const FeatureLayer = await window.$arcgis.import<typeof __esri.FeatureLayer>(
  "@arcgis/core/layers/FeatureLayer",
);
const locateBetweenOperator = await window.$arcgis.import<
  typeof __esri.locateBetweenOperator
>("@arcgis/core/geometry/operators/locateBetweenOperator");
```

## Usage

1. Open your terminal in the root folder of your project.
2. Add this project to your package.json
    ```shell
    bun add --dev github:WSDOT-GIS/types_arcgis-core-adapter
    ```