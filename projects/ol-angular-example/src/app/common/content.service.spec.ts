import { TestBed } from '@angular/core/testing';

import { ContentService } from './content.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

describe('ContentService', () => {
  let http: Partial<HttpClient>;
  let message: Partial<MessageService>;

  beforeEach(() => {
    http = {};
    message = {};

    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: http
        },
        {
          provide: MessageService,
          useValue: message
        }
      ]
    });
  });

  it('should be created', () => {
    const service: ContentService = TestBed.get(ContentService);
    expect(service).toBeTruthy();
  });
});
