// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    loadData();
    loadMidwestFloors();
    loadSouthFloors();
    loadWestFloors();
    loadNortheastMaterials();
    loadMidwestMaterials();
    loadSouthMaterials();
    loadWestMaterials();
    loadPrices();
    loadBaths();
    loadBeds();
    loadOutdoors();
    loadSize();
    $('#data-table').DataTable( {
    "ajax": "json/data_table.json",
    "columns": [
      { "data": "Year" },
      { "data": "Location" },
      { "data": "Median size" },
      { "data": "Median price" },
      { "data": "Percentage two or fewer bedrooms" },
      { "data": "Percentage three bedrooms" },
      { "data": "Percentage four or more bedrooms" },
      { "data": "Percentage one and a half bathrooms or fewer" },
      { "data": "Percentage two bathrooms" },
      { "data": "Percentage two and a half bathrooms or more" },
      { "data": "Percentage one story" },
      { "data": "Percentage two stories" },
      { "data": "Percentage three or more stories" },
      { "data": "Percentage patio" },
      { "data": "Percentage porch" },
      { "data": "Percentage deck" },
      { "data": "Percentage brick" },
      { "data": "Percentage wood" },
      { "data": "Percentage stucco" },
      { "data": "Percentage vinyl siding" },
      { "data": "Percentage fiber cement" },
      { "data": "Percentage other materials" },

    ]
} );

});

// Size chart

// var usSize = [];
// var neSize = [];
// var mwSize = [];
// var soSize = [];
// var weSize = [];
//
//
//
// function loadSize(){
//   $.getJSON( "json/size_regions.json", function( yearSize ) {
//     console.log ( yearSize );
//     parseSize(yearSize);
//   });
// }
//
// function parseSize(yearSize){
//   // console.log ( yearPrice[0].title );
//   $.each(yearSize, function(index) {
//     console.log ( yearSize[index].title );
//     // priceYear.push(yearPrice[index].priceYear);
//     usSize.push(yearSize[index].usSize);
//     neSize.push(yearSize[index].neSize);
//     mwSize.push(yearSize[index].mwSize);
//     soSize.push(yearSize[index].soSize);
//     weSize.push(yearSize[index].weSize);
//
//
//   });
//   buildSize();
// }
//
// function buildSize(){
//
//   var sizeChart = c3.generate({
//     bindto: '#size-chart',
//     padding: {
//       bottom: 20,
//     },
//     data: {
//       json: {
//         "United States": usSize,
//         "Northeast": neSize,
//         "Midwest": mwSize,
//         "South": soSize,
//         "West": weSize
//
//         // "Year": priceYear,
//       },
//       colors: {
//         "United States": '#A7333F',
//         "Northeast": '#DC4E69',
//         "Midwest": '#FC727C',
//         "South": '#580C1F',
//         "West": '#2B0C66',
//         // "Other": '#2B0C66' A7333F
//       },
//     }
// });
// }



var usSize = [];


function loadSize(){
  $.getJSON( "json/size.json", function( yearSize ) {
    console.log ( yearSize );
    parseSize(yearSize);
  });
}

function parseSize(yearSize){
  // console.log ( yearPrice[0].title );
  $.each(yearSize, function(index) {
    console.log ( yearSize[index].title );
    // priceYear.push(yearPrice[index].priceYear);
    usSize.push(yearSize[index].usSize);

  });
  buildSize();
}

function buildSize(){

  var sizeChart = c3.generate({
    bindto: '#size-chart',
    padding: {
      bottom: 20,
    },
    data: {
      json: {
        "United States": usSize,
        // "Year": priceYear,
      },
      colors: {
        "United States": '#A7333F',
        // "Northeast": '#DC4E69',
        // "Midwest": '#FC727C',
        // "South": '#580C1F',
        // "West": '#2B0C66',
        // "Other": '#2B0C66' A7333F
      },
      // axis: {
      //   x: {
      //     type: 'timeseries',
      //     tick: {
      //       format: function (x) { return x.getFullYear(); }
      //     }
      //          },
      //   y: {
      //     label: 'Price'
      //   },
      //
      // }

    }
});
}

// Beds charts

var twoBeds = [];
var threeBeds = [];
var fourBeds = [];

function loadBeds(){
  $.getJSON( "json/bedrooms.json", function( numberBeds ) {
    console.log ( numberBeds );
    parseBeds(numberBeds);
  });
}

function parseBeds(numberBeds){
  // console.log ( numberFloors[0].title );
  $.each(numberBeds, function(index) {
    twoBeds.push(numberBeds[index].twoBeds);
    threeBeds.push(numberBeds[index].threeBeds);
    fourBeds.push(numberBeds[index].fourBeds);

  });
  buildBeds();
}

function buildBeds(){

  var bedsChart = c3.generate({
      bindto: '#bed-chart',
      padding: {
        bottom: 20,
      },
      data: {
          json: {
            "Two or fewer bedrooms": twoBeds,
            "Three bedrooms": threeBeds,
            "Four or more bedrooms": fourBeds
          },
          type: 'bar',
          colors: {
            "Two or fewer bedrooms": '#FC727C',
            "Three bedrooms": '#C52233',
            "Four or more bedrooms": '#580C1F'
          },
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          },

          // or
          //width: 100 // this makes bar width 100px
      },
      axis: {
        x: {
          // label: 'Year',
          type: 'category',
          categories: ['1975 - 1979', '1980 - 1984', '1985 - 1989','1990 - 1994','1995 - 1999','2000 - 2004','2005 - 2009','2010 - 2014', '2015 - 2019']
        },
        y: {
          label: 'Percent'
        },

      }

  });
}

// Baths charts

var oneBath = [];
var twoBaths = [];
var twoAndHalfBaths = [];

function loadBaths(){
  $.getJSON( "json/bathrooms.json", function( numberBaths ) {
    console.log ( numberBaths );
    parseBaths(numberBaths);
  });
}

function parseBaths(numberBaths){
  // console.log ( numberFloors[0].title );
  $.each(numberBaths, function(index) {
    oneBath.push(numberBaths[index].oneBath);
    twoBaths.push(numberBaths[index].twoBaths);
    twoAndHalfBaths.push(numberBaths[index].twoAndHalfBaths);

  });
  buildBaths();
}

function buildBaths(){

  var bathsChart = c3.generate({
      bindto: '#bath-chart',
      padding: {
        bottom: 20,
      },
      data: {
          json: {
            "One and a half or fewer bathrooms": oneBath,
            "Two bathrooms": twoBaths,
            "Two and a half or more bathrooms": twoAndHalfBaths
          },
          type: 'bar',
          colors: {
            "One and a half or fewer bathrooms": '#FC727C',
            "Two bathrooms": '#C52233',
            "Two and a half or more bathrooms": '#580C1F'
          },
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          },

          // or
          //width: 100 // this makes bar width 100px
      },
      axis: {
        x: {
          // label: 'Year',
          type: 'category',
          categories: ['1975 - 1979', '1980 - 1984', '1985 - 1989','1990 - 1994','1995 - 1999','2000 - 2004','2005 - 2009','2010 - 2014', '2015 - 2019']
        },
        y: {
          label: 'Percent'
        },

      }

  });
}

// Floors chart

// Northeast floors chart

var oneStory = [];
var twoStory = [];
var threeStory = [];

function loadData(){
  $.getJSON( "json/northeast_floors.json", function( numberFloors ) {
    console.log ( numberFloors );
    parseData(numberFloors);
  });
}

function parseData(numberFloors){
  // console.log ( numberFloors[0].title );
  $.each(numberFloors, function(index) {
    console.log ( numberFloors[index].title );
    oneStory.push(numberFloors[index].oneStory);
    twoStory.push(numberFloors[index].twoStory);
    threeStory.push(numberFloors[index].threeStory);

  });
  buildCharts();
}

function buildCharts(){

  var northeastFloorsChart = c3.generate({
      bindto: '#northeast-floors-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "1 story": oneStory,
          "2 stories": twoStory,
          "3 or more stories": threeStory,

        },
          order: null,
          type : 'donut',
          colors: {
            "1 story": '#C52233',
            "2 stories": '#A7333F',
            "3 or more stories": '#580C1F'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Northeast"
      }
  });
}

// Midwest floors chart

var oneStoryMidwest = [];
var twoStoryMidwest = [];
var threeStoryMidwest = [];


function loadMidwestFloors(){
  $.getJSON( "json/midwest_floors.json", function( numberFloorsMidwest ) {
    console.log ( numberFloorsMidwest );
    parseMidwestFloors(numberFloorsMidwest);
  });
}

function parseMidwestFloors(numberFloorsMidwest){
  $.each(numberFloorsMidwest, function(index) {
    console.log ( numberFloorsMidwest[index].title );
    oneStoryMidwest.push(numberFloorsMidwest[index].oneStoryMidwest);
    twoStoryMidwest.push(numberFloorsMidwest[index].twoStoryMidwest);
    threeStoryMidwest.push(numberFloorsMidwest[index].threeStoryMidwest);

  });
  buildMidwestFloors();
}

function buildMidwestFloors(){

  var midwestFloorsChart = c3.generate({
      bindto: '#midwest-floors-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "1 story": oneStoryMidwest,
          "2 stories": twoStoryMidwest,
          "3 or more stories": threeStoryMidwest,

        },
          order: null,
          type : 'donut',
          colors: {
            "1 story": '#C52233',
            "2 stories": '#A7333F',
            "3 or more stories": '#580C1F'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Midwest"
      }
  });
}

// South floor charts
var oneStorySouth = [];
var twoStorySouth = [];
var threeStorySouth = [];


function loadSouthFloors(){
  $.getJSON( "json/south_floors.json", function( numberFloorsSouth ) {
    console.log ( numberFloorsSouth );
    parseSouthFloors(numberFloorsSouth);
  });
}

function parseSouthFloors(numberFloorsSouth){
  $.each(numberFloorsSouth, function(index) {
    console.log ( numberFloorsSouth[index].title );
    oneStorySouth.push(numberFloorsSouth[index].oneStorySouth);
    twoStorySouth.push(numberFloorsSouth[index].twoStorySouth);
    threeStorySouth.push(numberFloorsSouth[index].threeStorySouth);

  });
  buildSouthFloors();
}

function buildSouthFloors(){

  var southFloorsChart = c3.generate({
      bindto: '#south-floors-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "1 story": oneStorySouth,
          "2 stories": twoStorySouth,
          "3 or more stories": threeStorySouth,

        },
          order: null,
          type : 'donut',
          colors: {
            "1 story": '#C52233',
            "2 stories": '#A7333F',
            "3 or more stories": '#580C1F'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "South"
      }
  });
}
// West floor chart
var oneStoryWest = [];
var twoStoryWest = [];
var threeStoryWest = [];


function loadWestFloors(){
  $.getJSON( "json/west_floors.json", function( numberFloorsWest ) {
    console.log ( numberFloorsWest );
    parseWestFloors(numberFloorsWest);
  });
}

function parseWestFloors(numberFloorsWest){
  $.each(numberFloorsWest, function(index) {
    console.log ( numberFloorsWest[index].title );
    oneStoryWest.push(numberFloorsWest[index].oneStoryWest);
    twoStoryWest.push(numberFloorsWest[index].twoStoryWest);
    threeStoryWest.push(numberFloorsWest[index].threeStoryWest);

  });
  buildWestFloors();
}

function buildWestFloors(){

  var westFloorsChart = c3.generate({
      bindto: '#west-floors-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "1 story": oneStoryWest,
          "2 stories": twoStoryWest,
          "3 or more stories": threeStoryWest,

        },
          order: null,
          type : 'donut',
          colors: {
            "1 story": '#C52233',
            "2 stories": '#A7333F',
            "3 or more stories": '#580C1F'
          },

          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "West"
      }
  });
}

// Outdoors charts

var patio = [];
var porch = [];
var deck = [];

function loadOutdoors(){
  $.getJSON( "json/outdoors.json", function( numberOutdoors ) {
    console.log ( numberOutdoors );
    parseOutdoors(numberOutdoors);
  });
}

function parseOutdoors(numberOutdoors){
  // console.log ( numberFloors[0].title );
  $.each(numberOutdoors, function(index) {
    patio.push(numberOutdoors[index].patio);
    porch.push(numberOutdoors[index].porch);
    deck.push(numberOutdoors[index].deck);

  });
  buildOutdoors();
}

function buildOutdoors(){

  var outdoorsChart = c3.generate({
      bindto: '#outdoors-chart',
      padding: {
        bottom: 20,
      },
      data: {
          json: {
            "Patio": patio,
            "Porch": porch,
            "Deck": deck
          },
          type: 'bar',
          colors: {
            "Patio": '#FC727C',
            "Porch": '#C52233',
            "Deck": '#580C1F'
          },
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          },

          // or
          //width: 100 // this makes bar width 100px
      },
      axis: {
        x: {
          type: 'category',
          categories: ['Northeast', 'Midwest', 'South','West']
        },
        y: {
          label: 'Percent'
        },

      }

  });
}


// var bedsChart = c3.generate({
//     bindto: '#outdoors-chart',
//     data: {
//         columns: [
//             ['data1', 30, 200, 100, 400, 150, 250],
//             ['data2', 130, 100, 140, 200, 150, 50],
//             ['data3', 120, 60, 240, 280, 350, 10]
//         ],
//         type: 'bar'
//     },
//     bar: {
//         width: {
//             ratio: 0.5 // this makes bar width 50% of length between ticks
//         }
//         // or
//         //width: 100 // this makes bar width 100px
//     }
// });



// Materials chart

// Northeast materials chart

var brickNortheast = [];
var woodNortheast = [];
var stuccoNortheast = [];
var vinylNortheast = [];
var cementNortheast = [];
var otherNortheast = [];


function loadNortheastMaterials(){
  $.getJSON( "json/northeast_materials.json", function( materialsNortheast ) {
    console.log ( materialsNortheast );
    parseNortheastMaterials(materialsNortheast);
  });
}

function parseNortheastMaterials(materialsNortheast){
  $.each(materialsNortheast, function(index) {
    console.log ( materialsNortheast[index].titleMaterialsNortheast );
    brickNortheast.push(materialsNortheast[index].brickNortheast);
    woodNortheast.push(materialsNortheast[index].woodNortheast);
    stuccoNortheast.push(materialsNortheast[index].stuccoNortheast);
    vinylNortheast.push(materialsNortheast[index].vinylNortheast);
    cementNortheast.push(materialsNortheast[index].cementNortheast);
    otherNortheast.push(materialsNortheast[index].otherNortheast);

  });
  buildNortheastMaterials();
}

function buildNortheastMaterials(){

  var northeastMaterialsChart = c3.generate({
      bindto: '#northeast-materials-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "Brick": brickNortheast,
          "Wood": woodNortheast,
          "Stucco": stuccoNortheast,
          "Vinyl Siding": vinylNortheast,
          "Fiber Cement": cementNortheast,
          "Other": otherNortheast,

        },
          order: null,
          type : 'donut',
          colors: {
            "Brick": '#FC727C',
            "Wood": '#DC4E69',
            "Stucco": '#C52233',
            "Vinyl Siding": '#A7333F',
            "Fiber Cement": '#580C1F',
            "Other": '#2B0C66'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Northeast"
      }
  });
}

// Midwest materials chart

var brickMidwest = [];
var woodMidwest = [];
var stuccoMidwest = [];
var vinylMidwest = [];
var cementMidwest = [];
var otherMidwest = [];


function loadMidwestMaterials(){
  $.getJSON( "json/midwest_materials.json", function( materialsMidwest ) {
    console.log ( materialsMidwest );
    parseMidwestMaterials(materialsMidwest);
  });
}

function parseMidwestMaterials(materialsMidwest){
  $.each(materialsMidwest, function(index) {
    console.log ( materialsMidwest[index].titleMaterialsMidwest );
    brickMidwest.push(materialsMidwest[index].brickMidwest);
    woodMidwest.push(materialsMidwest[index].woodMidwest);
    stuccoMidwest.push(materialsMidwest[index].stuccoMidwest);
    vinylMidwest.push(materialsMidwest[index].vinylMidwest);
    cementMidwest.push(materialsMidwest[index].cementMidwest);
    otherMidwest.push(materialsMidwest[index].otherMidwest);

  });
  buildMidwestMaterials();
}

function buildMidwestMaterials(){

  var midwestMaterialsChart = c3.generate({
      bindto: '#midwest-materials-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "Brick": brickMidwest,
          "Wood": woodMidwest,
          "Stucco": stuccoMidwest,
          "Vinyl Siding": vinylMidwest,
          "Fiber Cement": cementMidwest,
          "Other": otherMidwest,

        },
          order: null,
          type : 'donut',
          colors: {
            "Brick": '#FC727C',
            "Wood": '#DC4E69',
            "Stucco": '#C52233',
            "Vinyl Siding": '#A7333F',
            "Fiber Cement": '#580C1F',
            "Other": '#2B0C66'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "Midwest"
      }
  });
}

// South materials chart

var brickSouth = [];
var woodSouth = [];
var stuccoSouth = [];
var vinylSouth = [];
var cementSouth = [];
var otherSouth = [];


function loadSouthMaterials(){
  $.getJSON( "json/south_materials.json", function( materialsSouth ) {
    console.log ( materialsSouth );
    parseSouthMaterials(materialsSouth);
  });
}

function parseSouthMaterials(materialsSouth){
  $.each(materialsSouth, function(index) {
    console.log ( materialsSouth[index].titleMaterialsSouth );
    brickSouth.push(materialsSouth[index].brickSouth);
    woodSouth.push(materialsSouth[index].woodSouth);
    stuccoSouth.push(materialsSouth[index].stuccoSouth);
    vinylSouth.push(materialsSouth[index].vinylSouth);
    cementSouth.push(materialsSouth[index].cementSouth);
    otherSouth.push(materialsSouth[index].otherSouth);

  });
  buildSouthMaterials();
}

function buildSouthMaterials(){

  var southMaterialsChart = c3.generate({
      bindto: '#south-materials-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "Brick": brickSouth,
          "Wood": woodSouth,
          "Stucco": stuccoSouth,
          "Vinyl Siding": vinylSouth,
          "Fiber Cement": cementSouth,
          "Other": otherSouth,

        },
          order: null,
          type : 'donut',
          colors: {
            "Brick": '#FC727C',
            "Wood": '#DC4E69',
            "Stucco": '#C52233',
            "Vinyl Siding": '#A7333F',
            "Fiber Cement": '#580C1F',
            "Other": '#2B0C66'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "South"
      }
  });
}

// West materials chart

var brickWest = [];
var woodWest = [];
var stuccoWest = [];
var vinylWest = [];
var cementWest = [];
var otherWest = [];


function loadWestMaterials(){
  $.getJSON( "json/west_materials.json", function( materialsWest ) {
    console.log ( materialsWest );
    parseWestMaterials(materialsWest);
  });
}

function parseWestMaterials(materialsWest){
  $.each(materialsWest, function(index) {
    console.log ( materialsWest[index].titleMaterialsWest );
    brickWest.push(materialsWest[index].brickWest);
    woodWest.push(materialsWest[index].woodWest);
    stuccoWest.push(materialsWest[index].stuccoWest);
    vinylWest.push(materialsWest[index].vinylWest);
    cementWest.push(materialsWest[index].cementWest);
    otherWest.push(materialsWest[index].otherWest);

  });
  buildWestMaterials();
}

function buildWestMaterials(){

  var westMaterialsChart = c3.generate({
      bindto: '#west-materials-chart',
      padding: {
        bottom: 20,
      },
      data: {
        json: {
          "Brick": brickWest,
          "Wood": woodWest,
          "Stucco": stuccoWest,
          "Vinyl Siding": vinylWest,
          "Fiber Cement": cementWest,
          "Other": otherWest,

        },
          order: null,
          type : 'donut',
          colors: {
            "Brick": '#FC727C',
            "Wood": '#DC4E69',
            "Stucco": '#C52233',
            "Vinyl Siding": '#A7333F',
            "Fiber Cement": '#580C1F',
            "Other": '#2B0C66'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "West"
      }
  });
}

// Price chart

// var priceYear = [];
var priceUS = [];
var priceNortheast = [];
var priceMidwest = [];
var priceSouth = [];
var priceWest = [];


function loadPrices(){
  $.getJSON( "json/prices.json", function( yearPrice ) {
    console.log ( yearPrice );
    parsePrice(yearPrice);
  });
}

function parsePrice(yearPrice){
  // console.log ( yearPrice[0].title );
  $.each(yearPrice, function(index) {
    console.log ( yearPrice[index].title );
    // priceYear.push(yearPrice[index].priceYear);
    priceUS.push(yearPrice[index].priceUS);
    priceNortheast.push(yearPrice[index].priceNortheast);
    priceMidwest.push(yearPrice[index].priceMidwest);
    priceSouth.push(yearPrice[index].priceSouth);
    priceWest.push(yearPrice[index].priceWest);

  });
  buildPrice();
}

function buildPrice(){

  var priceChart = c3.generate({
    bindto: '#price-chart',
    padding: {
      bottom: 20,
    },
    data: {
      json: {
        "United States": priceUS,
        "Northeast": priceNortheast,
        "Midwest": priceMidwest,
        "South": priceSouth,
        "West": priceWest,
        // "Year": priceYear,
      },
      colors: {
        "United States": '#A7333F',
        "Northeast": '#DC4E69',
        "Midwest": '#FC727C',
        "South": '#580C1F',
        "West": '#2B0C66',
        // "Other": '#2B0C66' A7333F
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: function (x) { return x.getFullYear(); }
          }
               },
        y: {
          label: 'Price'
        },

      }

    }
});
}
