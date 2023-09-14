/*

The %c format specifier.
This allows you to apply various text styles
such as color, background color, font size, 
and more to your console messages

*/

const styles = `
    font-size: 18px;
    color: white;
    background-color: maroon;
    padding: 5px;
    border-radius: 5px;
    font-style: italic;
    font-weight: bold;
`;

console.log(`%c Styled console message! 😊`, styles);
