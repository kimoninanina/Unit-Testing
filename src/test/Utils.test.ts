import { getStringInfo, toUpperCase, StringUtils } from "../app/Utils";


describe('Utils test suite', ()=>{

    describe('StringUtils tests', ()=>{

        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
            console.log('Setup')
        })

        afterEach(()=>{
            // clearing mocks
            console.log('Teardown')
        })

        it('Should return correct upperCase', ()=>{
            const actual = sut.toUpperCase('abc');

            expect(actual).toBe('ABC');
            console.log('Actual test')
        })

        it('Should throw eoor on invalid argument - function ', ()=>{
            function expectError(){
                const actual = sut.toUpperCase('');
            }
            expect(expectError).toThrow;
            expect(expectError).toThrowError("invalid argument");
        })

        it('Should throw error on invalid argument - arrow function', ()=>{      
            expect(()=>{
                sut.toUpperCase('');
            }).toThrowError('invalid argument');
        })

        it('Should throw error on invalid argument - try catch block', (done)=>{             
            try {
                sut.toUpperCase('');
                done('GetStringInfo should throw error for invalid arg!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'invalid argument');
                done();
            }
        })
        

    });

    it('should return uppercase of valid string', () => {
        //arrage:
        const sut = toUpperCase;
        const expected = 'ABC'

        //act:
        const actual = sut('abc');

        //assert:
        expect(actual).toBe(expected);
    })
//parametrized test:
describe('ToUpperCase examples', ()=>{
    it.each([
        {input:'abc', expected: 'ABC'},
        {input:'My-String', expected: 'MY-STRING'},
        {input:'def', expected: 'DEF'}
    ])('$input toUpperCase should be $expected', ({input, expected})=>{
        const actual = toUpperCase(input);
        expect(actual).toBe(expected);
    });
})

    
// 描述字符串 'My-String' 的 getStringInfo 函数应该
describe('getStringInfo for arg My-String should', () => {

    // 测试用例：返回正确的长度
    test('return right length', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 characters 属性的长度是否为 9
        expect(actual.characters).toHaveLength(9);
    });

    // 测试用例：返回正确的小写形式
    test('return right lower case', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 lowerCase 属性的值是否为 'my-string'
        expect(actual.lowerCase).toBe('my-string');
    });

    // 测试用例：返回正确的大写形式
    test('return right upper case', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 upperCase 属性的值是否为 'MY-STRING'
        expect(actual.upperCase).toBe('MY-STRING');
    });

    // 测试用例：返回正确的字符数组及其他验证
    test('return right characters', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 characters 属性是否等于指定的数组
        expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
        // 验证 characters 属性是否包含字符串 'M'
        expect(actual.characters).toContain<string>('M');
        // 验证 characters 属性是否包含指定数组中的所有元素
        expect(actual.characters).toEqual(
            expect.arrayContaining(['S', 't', 'r','i', 'n', 'g', 'M', 'y', '-'])
        );
    });

    // 测试用例：返回已定义的额外信息
    test('return defined extra info', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 extraInfo 属性是否已定义
        expect(actual.extraInfo).toBeDefined();
    });

    // 测试用例：返回正确的额外信息
    test('return right extra info', () => {
        // 调用 getStringInfo 函数，传递参数 'My-String'，并将返回值存储在变量 actual 中
        const actual = getStringInfo('My-String');
        // 验证 extraInfo 属性的值是否等于空对象 {}
        expect(actual.extraInfo).toEqual({});
    });
});



});