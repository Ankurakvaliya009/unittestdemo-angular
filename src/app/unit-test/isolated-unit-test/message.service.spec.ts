
import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have no alert message to start', () => {
    expect(service.message.length).toBe(0);
  });

  it('should have first element is start', () => {
    service.message.push('start')
    expect(service.message[0]).toBe('start')
  });

  it('should have second element start',()=>{
    service.message.push('start')
    service.message.push('start 2')
    service.message.push('start 3')
    expect(service.message[1]).toBe('start 2')
  })
});
