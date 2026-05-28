function padMessage(message, blockSize) {
    if (typeof message !== 'string') throw new Error('Данные должны быть строкой');
    if (blockSize <= 0) throw new Error('Размер блока должен быть больше нуля');
    
    const paddingLength = blockSize - (message.length % blockSize);
    if (paddingLength === blockSize) return message;
    
    return message + '0'.repeat(paddingLength);
}

function mockHash256(data) {
    if (!data) return null;
    return data.split('').reverse().join('') + '_sha256_mock';
}

module.exports = { padMessage, mockHash256 };