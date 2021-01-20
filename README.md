## shapefile-simplify

> Simplify shapefiles programmatically for mapbox Tileset/DataSource uploads using [mapshaper](https://github.com/mbloch/mapshaper).  
> 
> Weighted Visvalingam simplification is used by default.


### Prerequisites

1. NodeJS
   - node version 10.16.3
   - npm v 6.9


## Installation

1. Clone this repository.  
`git clone https://github.com/ciatph/shapefile-simplify.git`
2. Install dependencies.  
`npm install`
3. Create a **.env** file from the **.env.example** file. Update its defined variables in accordance with your personnal [mapshaper cli command reference](https://github.com/mbloch/mapshaper/wiki/Command-Reference) settings.
   - `PERCENTAGE` - Percentage of removable points to retain
   - `OUTPUT_FORMAT` - file format of the simplified output

## Usage

1. Put all shapefile (`.shp`, `.cpg`, `.dbf`, `.pfj` and `.shx`) input inside the **shapefiles/** directory. 
2. Run the npm script.  
`npm run start`
3. Wait for the simplification process to finish. Simplified files will be generated in the **formatted/** directory.

@ciatph  
20200120
