import { HerosComponent } from './heros.component';

describe('HerosComponent', () => {
  it('#clicked() should toggle #isOn', () => {
    const comp = new HerosComponent();
    expect(comp.isOn).withContext('off at first add').toBe(false);
    comp.clicked();
    expect(comp.isOn).withContext('on after click').toBe(true);
    comp.clicked();
    expect(comp.isOn).withContext('off after seciond click').toBe(false);
  });

  it('#clicked() should set #message to "is on"',()=>{
    const comp = new HerosComponent();
    expect(comp.Message).toBe('The light is Off')
    comp.clicked()
    expect(comp.Message).withContext('The light is On')
    comp.clicked()
    
    expect(comp.Message).toBe('The light is Off')
  })

  it('hero should be empty',()=>{
    const comp = new HerosComponent();
    expect(comp.heroes.length).toBe(0)
  })
});
