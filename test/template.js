/**
 * An example of Node Js Test describe file.
 */
import { expect } from 'chai';
import { someFun } from './someFile';

describe('example method', () => {
  it('some test as string', () => {
    // ARRANGE
    const someText = 'some string';

    // ACT
    const result = someFun(someText);

    // ASSERT
    expect(result).to.be.equal('gnirts emos');
  });
});