import { describe, expect, test } from "bun:test";
import "./setup-arcgis-import.js";

describe("Import ArcGIS Modules", () => {
	test("$arcgis.import should be defined", () => {
		expect($arcgis).toBeDefined();
		expect(typeof $arcgis.import).toBe("function");
	});
	test("import multiple", async () => {
		const [EsriMap, WebTileLayer] = await $arcgis.import([
			"@arcgis/core/Map",
			"@arcgis/core/layers/WebTileLayer",
		] as const);
		expect(EsriMap.prototype.declaredClass).toStrictEqual("esri.Map");
		expect(WebTileLayer.prototype.declaredClass).toStrictEqual(
			"esri.layers.WebTileLayer"
		);
	});
	test("import single", async () => {
		$arcgis.import("@arcgis/core/layers/FeatureLayer").then((FeatureLayer) => {
			expect(FeatureLayer.prototype.declaredClass).toStrictEqual(
				"esri.layers.FeatureLayer"
			);
		});
		$arcgis
			.import("@arcgis/core/geometry/operators/locateBetweenOperator")
			.then((locateBetweenOperator) => {
				expect(locateBetweenOperator.executeMany).toBeFunction();
				expect(locateBetweenOperator.executeMany).toBeFunction();
			});
	});
});

// test(
// 	"import test",
// 	async () => {
// 		// await import("https://js.arcgis.com/4.32/init.js")

// 		/* Load the ArcGIS API for JavaScript
//      <script src="https://js.arcgis.com/4.32/init.js"
//         integrity="sha512-No89/gYBSjUTSrkIOGKcgiZ/OXm8IVA5l0nEEHOPjKNw+ttK1JeukfpbuIIjR9k1DidjvXo3HecEuPGXbP1W9A=="
//         crossorigin="anonymous"></script>
//     */
// 		const script = document.createElement("script");
// 		script.src = "https://js.arcgis.com/4.33/init.js";
// 		// Create a SHA512 hash from script.src

// 		script.integrity =
// 			"sha512-EfP6vfs74H1lvj1btATOBb3SsFZvLXOnuJM80m+73qItZu0Gs2km/x8eKuBsJfw88qtUzlEcDI/4GzONB5ot9g==";
// 		script.crossOrigin = "anonymous";
// 		script.type = "text/javascript";
// 		document.head.appendChild(script);

// 		// let loaded = false;

// 		// script.addEventListener('load', () => {
// 		//     loaded = true;
// 		// })

// 		// while (!loaded) {
// 		//     await new Promise(resolve => setTimeout(resolve, 100));
// 		// }

// 		const [ArcGisMap, WebTileLayer] = await window.$arcgis.import([
// 			"@arcgis/core/Map",
// 			"@arcgis/core/layers/WebTileLayer",
// 		] as const);
// 		const FeatureLayer = await window.$arcgis.import(
// 			"@arcgis/core/layers/FeatureLayer"
// 		);
// 		const locateBetweenOperator = await window.$arcgis.import(
// 			"@arcgis/core/geometry/operators/locateBetweenOperator"
// 		);
// 		expect(ArcGisMap).toBeDefined();
// 		expect(WebTileLayer).toBeDefined();
// 		expect(FeatureLayer).toBeDefined();
// 		expect(locateBetweenOperator).toBeDefined();
// 	},
// 	{
// 		timeout: 10_000,
// 	}
// );

// // test('dom test', () => {
// //   document.body.innerHTML = "<button>My button</button>";
// //   const button = document.querySelector('button');
// //   expect(button?.innerText).toEqual('My button');
// // });
