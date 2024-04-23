const gradeToLetter = require('./gradeToLetter');

describe('gradeToLetter function', () => {
  test('Invalid input: should return "Invalid input. Please provide a number." for non-numeric input', () => {
    const result = gradeToLetter('not a number');
    expect(result).toBe('Invalid input. Please provide a number.');
  });

  test('Grade A: should return "A" for score >= 90', () => {
    const result = gradeToLetter(95);
    expect(result).toBe('A');
  });

  test('Grade A: should return "A" for score >= 90', () => {
    const result = gradeToLetter(90);
    expect(result).toBe('A');
  });

  test('Grade B: should return "B" for score >= 80 and < 90', () => {
    const result = gradeToLetter(85);
    expect(result).toBe('B');
  });

  test('Grade B: should return "B" for score >= 80 and < 90', () => {
    const result = gradeToLetter(80);
    expect(result).toBe('B');
  });

  test('Grade C: should return "C" for score >= 70 and < 80', () => {
    const result = gradeToLetter(75);
    expect(result).toBe('C');
  });

  test('Grade C: should return "C" for score >= 70 and < 80', () => {
    const result = gradeToLetter(70);
    expect(result).toBe('C');
  });

  test('Grade D: should return "D" for score >= 60 and < 70', () => {
    const result = gradeToLetter(65);
    expect(result).toBe('D');
  });

  test('Grade D: should return "D" for score >= 60 and < 70', () => {
    const result = gradeToLetter(60);
    expect(result).toBe('D');
  });

  test('Grade F: should return "F" for score < 60', () => {
    const result = gradeToLetter(55);
    expect(result).toBe('F');
  });
});
