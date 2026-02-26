function Check(king, bishop, rook) {
    if (king.row === rook.row || king.col === rook.col) return true; //При условии что у ладьи одинаковая строка/колонка
if( (king.row - bishop.row) === (king.col - bishop.col)) return true; //При условии что у слона одинаковое расстояние по диагонали
return false;
}
console.log(Check(
    {row: 3, col: 3}, //король
    {row: 5, col: 5}, //слон
    {row: 3, col: 7} //ладья
    ) ? 'ШАХ!' : 'Нет шаха');