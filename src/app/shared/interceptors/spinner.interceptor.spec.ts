import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { SpinnerInterceptor } from './spinner.interceptor';

describe('authInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let spinnerService: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SpinnerInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpinnerInterceptor,
          multi: true
        },
        {
          provide: spinnerService,
          useValue: {
            getToken: () => 'fake-token'
          }
        }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    spinnerService = TestBed.inject(SpinnerService);
  });

  it('should add Authorization header if token is present', () => {
    const testUrl = '/test';
    const testData = { foo: 'bar' };

    TestBed.inject(HttpTestingController)
      .expectOne(req => req.url === testUrl && req.headers.has('Authorization'))
      .flush(testData);

    // Make a request to test the interceptor
    httpTestingController.expectOne(testUrl).flush(testData);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
