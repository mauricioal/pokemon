import {
    async,
    getTestBed,
    TestBed
} from '@angular/core/testing';
import {
    BaseRequestOptions,
    Http,
    Response,
    ResponseOptions
} from '@angular/http';
import {
    MockBackend,
    MockConnection
} from '@angular/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon';
import { POKEMONES } from '../mocks/pokemones';

describe('Service: PokemonService', () => {
    let backend: MockBackend;
    let service: PokemonService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
           providers: [
                BaseRequestOptions,
                MockBackend,
                PokemonService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(PokemonService);
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === 'api/forms') {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should return the list of pokemones from the server on success', () => {
        setupConnections(backend, {
            body: POKEMONES,
            status: 200
        });

        service.getPokemones(1).subscribe((data: Pokemon[]) => {
            expect(data.length).toBe(3);
            expect(data[0].name).toBe(POKEMONES[0].name);
            expect(data[1].name).toBe(POKEMONES[1].name);
            expect(data[2].name).toBe(POKEMONES[2].name);
        });
    });

    it('should log an error to the console on error', () => {
        setupConnections(backend, {
            body: { error: `I'm afraid I've got some bad news!` },
            status: 500
        });
        spyOn(console, 'error');

        service.getPokemones(1).subscribe(null, () => {
            expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!`);
        });
    });
});