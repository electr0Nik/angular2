import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockInMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
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
        ]
        return { heroes };
    }
}