(function () {
    var myConnector = tableau.makeConnector();
    myConnector.getSchema = function (schemaCallback) {
        var cols = [
            { id: "id", alias: "ID", dataType: tableau.dataTypeEnum.int },
            { id: "date", alias: "Date", dataType: tableau.dataTypeEnum.datetime },
            { id: "healthCareDistrict", alias: "healthCareDistrict", dataType: tableau.dataTypeEnum.string }
        ];
        var tableInfo = {
            id: "confirmedDeaths",
            alias: "Confirmed Finnish Deaths",
            columns: cols
        };
        schemaCallback([tableInfo]);
    };
    myConnector.getData = function (table, doneCallback) {
        $.getJSON("https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData", function (resp) {
            var feat = resp["deaths"];
            tableData = [];
            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "id": feat[i]["id"],
                    "date": feat[i]["date"],
                    "healthCareDistrict": feat[i]["healthCareDistrict"]
                });
            }
            table.appendRows(tableData);
            doneCallback();
        });
    };
    tableau.registerConnector(myConnector);
    $(document).ready(function () {
        $("#submitButton").click(function () {
            tableau.connectionName = "confirmedDeaths";
            tableau.submit();
        });
    });
})();