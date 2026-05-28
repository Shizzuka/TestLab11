const { padMessage, mockHash256 } = require('./utils');

describe('Криптографические утилиты', () => {
    describe('padMessage()', () => {
        test('Корректно дополняет блок до 16 байт', () => {
            expect(padMessage('Nikita', 16)).toBe('Nikita0000000000');
        });

        test('Выбрасывает ошибку при неверном типе входных данных', () => {
            expect(() => padMessage(101101, 8)).toThrow('Данные должны быть строкой');
        });
    });

    describe('mockHash256()', () => {
        test('Генерирует корректную сигнатуру', () => {
            expect(mockHash256('data')).toBe('atad_sha256_mock');
        });
    });
});