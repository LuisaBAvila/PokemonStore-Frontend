import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { AppService} from './App.service';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
}

describe('ServiceService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      AppService,
      {
        provide: HttpClient,
        useClass: HttpClientMock
      }
    ]});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
