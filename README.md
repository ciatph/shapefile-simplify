## shapefile-simplify

> Simplify shapefiles programmatically for mapbox Tileset/DataSource uploads using [mapshaper](https://github.com/mbloch/mapshaper).  
> 
> Weighted Visvalingam simplification is used by default.


### Prerequisites

The following dependencies are used for this project. Feel free to use other dependency versions as needed.

1. Windows 10 OS
2. NVM for Windows
   - v1.1.9
3. NodeJS
   - node version 10.16.3
   - npm v6.9.0
   - *(installed via nvm)*
   
### Core Libraries and Frameworks


(See package.json for more information.)

1. [mapshaper](https://github.com/mbloch/mapshaper) v0.5.28


## Installation

1. Clone this repository.  
`git clone https://github.com/ciatph/shapefile-simplify.git`
2. Install dependencies.  
`npm install`
3. Create a **.env** file from the **.env.example** file. Update its defined variables in accordance with your personnal [mapshaper cli command reference](https://github.com/mbloch/mapshaper/wiki/Command-Reference) settings.

   | Variable Name | Description                                                                                 |
   | ------------- | ------------------------------------------------------------------------------------------- |
   | PERCENTAGE    | Percentage of removable points to retain on the shapefile.                                  |
   | INPUT_FORMAT  | input file format (i.e., `.shp` for shapefile, `.geojson` for GeoJSON)                      |
   | OUTPUT_FORMAT | file format of the simplified  (i.e., `shapefile` for Shapefiles and `geojson` for GeoJSON) |

   - The example **.env** file below will create a simplified GeoJSON file (small file size) from a (hi-resolution, big file size) shapefile:  
      ```
      PERCENTAGE=1.5%
      INPUT_FORMAT=shp
      OUTPUT_FORMAT=geojson
      ```
   - The example **.env** file below will create a simplified `shapefile` from a (hi-resolution, big file size) shapefile:  
      ```
      PERCENTAGE=4.0%
      INPUT_FORMAT=shp
      OUTPUT_FORMAT=shapefile
      ```

## Usage

1. Create an INPUT directory named **"shapefiles"** inside the project's root directory. Put all shapefile-related input (`.shp`, `.cpg`, `.dbf`, `.pfj` and `.shx`) inside it.
2. Create an OUTPUT directory named **"formatted"** inside the project's root directory.
3. Run the npm script.  
`npm start`
1. Wait for the simplification process to finish. Simplified files will be generated in the **/formatted** directory.

@ciatph  
20200120
