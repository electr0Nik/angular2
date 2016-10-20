"use strict";
var MockInMemoryDataService = (function () {
    function MockInMemoryDataService() {
    }
    MockInMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'Mr. Nice' },
            { id: 2, name: 'Mr. Not-So-Nice' },
            { id: 3, name: 'Bombasto' },
            { id: 4, name: 'Narcolepso' },
            { id: 5, name: 'Bizarro' },
            { id: 6, name: 'Magento' },
            { id: 7, name: 'Elasti boy' },
            { id: 8, name: 'Mme Fantastic' },
            { id: 9, name: 'Dr. AI' },
            { id: 10, name: 'Dynamo' }
        ];
        return { heroes: heroes };
    };
    return MockInMemoryDataService;
}());
exports.MockInMemoryDataService = MockInMemoryDataService;
//# sourceMappingURL=mock-memory-data.service.js.map