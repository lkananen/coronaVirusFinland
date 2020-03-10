(function () {
    var myConnector = tableau.makeConnector();
    myConnector.getSchema = function (schemaCallback) {
        var cols = [
            { id: "id", alias: "ID", dataType: tableau.dataTypeEnum.string },
            { id: "date", alias: "Date", dataType: tableau.dataTypeEnum.string },
            { id: "healthCareDistrict", alias: "healthCareDistrict", dataType: tableau.dataTypeEnum.string },
            { id: "infectionSource", alias: "infectionSource", dataType: tableau.dataTypeEnum.string },
            { id: "infectionSourceCountry", alias: "infectionSourceCountry", dataType: tableau.dataTypeEnum.string }
        ];
        var tableInfo = {
            id: "confirmedInfections",
            alias: "Confirmed Finnish Infections",
            columns: cols
        };
        schemaCallback([tableInfo]);
    };
    myConnector.getData = function (table, doneCallback) {
        $.getJSON("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData", function (resp) {
            var feat = resp;
            tableData = [];
            // Iterate over the JSON object
            for (var i = 0, len = feat.confirmed.length; i < len; i++) {
                tableData.push({
                    "id": feat[i].confirmed.id,
                    "date": feat[i].confirmed.date,
                    "healthCareDistrict": feat[i].confirmed.healthCareDistrict,
                    "infectionSource": feat[i].confirmed.infectionSource,
                    "infectionSourceCountry": feat[i].confirmed.infectionSourceCountry
                });
            }
            table.appendRows(tableData);
            doneCallback();
        });
    };
    tableau.registerConnector(myConnector);
    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "confirmedInfections";
            tableau.submit();
        });
    });
})();