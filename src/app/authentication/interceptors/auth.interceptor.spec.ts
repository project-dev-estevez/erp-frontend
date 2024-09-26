import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { authInterceptor } from './auth.interceptor';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

describe('authInterceptor', () => {
  let httpTestingController: HttpTestingController;
  let authService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        authInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: authInterceptor,
          multi: true
        },
        {
          provide: AuthenticationService,
          useValue: {
            getToken: () => 'fake-token'
          }
        }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    authService = TestBed.inject(AuthenticationService);
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
