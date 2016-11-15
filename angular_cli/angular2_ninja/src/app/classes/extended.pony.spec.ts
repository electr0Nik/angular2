import { Pony } from './extended.pony';

describe('Pony class test suite', () => {
  let pony: Pony;

  beforeEach(() => {
    pony = new Pony(1, 'Furi', 75);
  });

  it('should construct a Pony', () => {
    expect(pony.name).toBe('Furi');
    expect(pony.id).toBe(1);
    expect(pony.speed).toBe(75);
  });

  it('pony should be faster', () => {
    expect(pony.isFasterThan(8)).toBe(true);
  });

  it('pony should be slower', () => {
    expect(pony.isFasterThan(100)).toBe(false);
  });

  it('should test the spyOn function', () => {
    spyOn(pony, 'isFasterThan').and.returnValues(true);
    let isPonyFaster = pony.isFasterThan(60);
    expect(isPonyFaster).toBe(true);
    expect(pony.isFasterThan).toHaveBeenCalled();
    expect(pony.isFasterThan).toHaveBeenCalledWith(60);
  });
});
