const colorGenerator = () => {
    const hexColors = ["37306B", "66347F", "3914AF", "200772", "6A48D7", "876ED7", "7109AA", "5F2580", "48036F", "9F3ED5", "AD66D5", "1240AB", "2A4480", "06266F", "4671D5", "6C8CD5", "4575D4", "6B8FD4", "3F2D84", "8884d8", "856FD7", "1144AA"];
    let lastIndex = -1;

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const getNextColor = () => {
        lastIndex++;
        if (lastIndex === hexColors.length) {
            shuffleArray(hexColors);
            lastIndex = 0;
        }
        return "#" + hexColors[lastIndex];
    };

    return getNextColor;
}
export default colorGenerator()