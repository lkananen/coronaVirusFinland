# Web Data Connector access to Finnish Coronavirus dataset
This repository contains Web Data Connector (WDC) source codes for a Finnish open source dataset on reported Coronavirus cases in Finland. The Tableau WDC defined here has been published through this repository's GitHub Pages site at:  
https://lkananen.github.io/coronaVirusFinland/

The connector allows easy access with Tableau to the data source listed below.

# Source data
Data on Coronavirus COVID-19 Finnish cases has been collected and published by Helsingin Sanomat as an open source dataset.

## Visualisation example

![Infections](./docs/img/visualisation_example.png)  
More visualisations on the data can be found under [my Tableau Public profile](https://public.tableau.com/profile/lkananen/).

# Tableau connection instructions
1. Open a worksheet.
2. Add new data source. Connection is a server connection and connect using Web Data Connector.
3. Enter address: https://lkananen.github.io/coronaVirusFinland/
4. Select the desired dataset.
5. Connect.

# Links
- Data visualisations:
  - https://public.tableau.com/profile/lkananen/
- Direct link to the used API:  
  - https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData
- More details about the used dataset:  
  - https://github.com/HS-Datadesk/koronavirus-avoindata

# Licence
MIT License

Copyright (c) 2020 Lauri Kananen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
